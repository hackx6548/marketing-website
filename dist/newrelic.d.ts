export namespace config {
    const app_name: string[];
    const license_key: string;
    namespace distributed_tracing {
        const enabled: boolean;
    }
    namespace logging {
        const level: string;
    }
    const allow_all_headers: boolean;
    namespace attributes {
        const exclude: string[];
    }
}
