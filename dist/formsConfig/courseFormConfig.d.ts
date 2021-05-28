declare function _exports(): {
    archivementConfig: {
        for: string;
        label: string;
        titleField: {
            type: string;
            name: string;
            placeholder: string;
        };
        fileField: {
            type: string;
            name: string;
        };
        textField: {
            type: string;
            name: string;
            placeholder: string;
        };
    }[];
    featuresConfig: {
        fileField: {
            type: string;
            name: string;
            for: string;
            label: string;
        };
        textFieldTitle: {
            type: string;
            name: string;
            placeholder: string;
            for: string;
            label: string;
        };
        textFieldSubtitle: {
            type: string;
            name: string;
            placeholder: string;
            for: string;
            label: string;
        };
    }[];
    timelineConfig: {
        title: {
            name: string;
            label: string;
        };
        subtitle: {
            name: string;
            label: string;
        };
        time: {
            name: string;
            label: string;
        };
    }[];
};
export = _exports;
