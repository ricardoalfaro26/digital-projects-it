export type Evaluacion = {
    /* ===================== SOLICITUD ===================== */

    solicitud_NumeroPreSolicitud: string;

    /* ===================== COMERCIANTE ===================== */

    comerciante_SubSegmentoId: number | null;
    comerciante_UbicacionEstablecimientoId: number | null;
    comerciante_TipoLocalId: number | null;
    comerciante_NombreComercial: string | null;
    comerciante_NombreLegal: string | null;
    comerciante_ActividadEconomicaCodigo: number | null;
    comerciante_ActividadEconomicaNombre: string | null;
    comerciante_FechaInicioNegocio: string | null;
    comerciante_TelefonoNegocio: string | null;
    comerciante_DireccionNegocio: string | null;
    comerciante_CicloNegocioId: number | null;
    comerciante_IngresoPorCiclo: number | null;
    comerciante_Ganancia: number | null;
    comerciante_Patrimonio: number | null;
    comerciante_CantidadEmpleados: number | null;

    comerciante_ClientePrincipal1: string | null;
    comerciante_ClientePrincipal2: string | null;
    comerciante_ProveedorPrincipal1: string | null;
    comerciante_ProveedorPrincipal2: string | null;

    /* ===================== ASALARIADO ===================== */

    asalariado_ActividadEconomicaCodigo: number | null;
    asalariado_ActividadEconomicaNombre: string | null;
    asalariado_TipoAsalariadoId: number | null;
    asalariado_NombreEmpresa: string | null;
    asalariado_Cargo: string | null;
    asalariado_SalarioMensual: number | null;
    asalariado_RecibeBonos: boolean | null;
    asalariado_CicloBonosId: number | null;
    asalariado_MontoBonos: number | null;
    asalariado_FechaIngreso: string | null;
    asalariado_TelefonoEmpresa: string | null;
    asalariado_DireccionEmpresa: string | null;
    asalariado_DepartamentoId: number | null;
    asalariado_DepartamentoNombre: string | null;
    asalariado_MunicipioId: number | null;
    asalariado_MunicipioNombre: string | null;

    /* ===================== REMESAS ===================== */

    remesas_FuenteFondosId: number | null;
    remesas_DestinoRemesasId: number | null;
    remesas_CicloIngresosId: number | null;
    remesas_PromedioCantidad: number | null;
    remesas_PromedioMonto: number | null;
    remesas_Ingreso: number | null;

    remesas_PaisOrigen: string | null;
    remesas_NombreRemitente: string | null;
    remesas_TipoRelacionId: number | null;

    /* ===================== JUBILADO ===================== */

    jubilado_InstitucionPension: string | null;
    jubilado_TipoPensionId: number | null;
    jubilado_CicloIngresosId: number | null;
    jubilado_MontoPension: number | null;

    /* ===================== AMA DE CASA ===================== */

    amaCasa_ActividadEconomicaCodigo: number | null;
    amaCasa_ActividadEconomicaNombre: string | null;
    amaCasa_FuenteIngresos: string | null;
    amaCasa_CicloId: number | null;
    amaCasa_Ingresos: number | null;

    /* ===================== RENTISTA ===================== */

    rentista_ActividadEconomicaCodigo: number | null;
    rentista_ActividadEconomicaNombre: string | null;
    rentista_FuenteIngresos: string | null;
    rentista_CicloId: number | null;
    rentista_Ingresos: number | null;
    rentista_TipoAlquilerId: number | null;

    /* ===================== OTROS ===================== */

    otros_ActividadEconomicaCodigo: number | null;
    otros_ActividadEconomicaNombre: string | null;
    otros_FuenteIngresos: string | null;
    otros_CicloId: number | null;
    otros_Ingresos: number | null;

    /* ===================== TOTALES ===================== */

    evaluacion_IngresoTotal: number | null;
    evaluacion_PatrimonioTotal: number | null;
}