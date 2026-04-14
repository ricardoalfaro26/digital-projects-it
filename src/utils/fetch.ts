export class Fetch<T> {
  private contentType: "application/json" | "application/zip" =
    "application/json";
  private body?: T;
  private method: "GET" | "POST" = "GET";
  private token?: string;
  private url: string = "";
  private fnUnauthorized?: () => void;

  setContentType(contentType: "application/json" | "application/zip"): void {
    this.contentType = contentType;
  }

  setBody(body: T): void {
    this.body = body;
  }

  setMethod(method: "GET" | "POST"): void {
    this.method = method;
  }

  setToken(token: string): void {
    this.token = token;
  }

  setUrl(url: string): void {
    this.url = url;
  }

  setFnUnauthorized(fnUnauthorized: () => void): void {
    this.fnUnauthorized = fnUnauthorized;
  }

  async build(): Promise<Response | undefined> {
    let requestInit: RequestInit = {};
    const headers = new Headers();
    
    if (this.contentType) {
      headers.append("Content-Type", this.contentType);
    }

    if (this.body) {
      requestInit = { ...requestInit, body: JSON.stringify(this.body) };
    }

    if (this.method) {
      requestInit = { ...requestInit, method: this.method };
    }

    if (this.token) {
      headers.append("Authorization", `Bearer ${this.token}`);
    }

    if (headers) {
      requestInit = { ...requestInit, headers };
    }

    const response = await fetch(this.url, requestInit)
    
    if (response.status === 401 && this.fnUnauthorized) {
      localStorage.removeItem("token");

      this.fnUnauthorized();

      return;
    };

    return response;
  }
}
