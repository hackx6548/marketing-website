declare function _exports(env: any, argv: any): {
    entry: {
        frontend: string;
        backend: string;
    };
    output: {
        filename: string;
        path: string;
        publicPath: string;
    };
    devtool: string;
    module: {
        rules: ({
            test: RegExp;
            exclude: RegExp;
            use: any[];
            loader?: undefined;
        } | {
            test: RegExp;
            use: string[];
            exclude?: undefined;
            loader?: undefined;
        } | {
            test: RegExp;
            loader: string;
            exclude?: undefined;
            use?: undefined;
        } | {
            test: RegExp;
            use: {
                loader: string;
                options: {};
            }[];
            exclude?: undefined;
            loader?: undefined;
        } | {
            test: RegExp;
            exclude: RegExp;
            use: {
                loader: string;
                options: {
                    presets: string[];
                };
            };
            loader?: undefined;
        } | {
            test: RegExp;
            exclude: RegExp;
            use: string;
            loader?: undefined;
        })[];
    };
    plugins: any[];
};
export = _exports;
