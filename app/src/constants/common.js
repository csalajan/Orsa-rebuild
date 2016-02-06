var common = {
    "APP_NAME": "ALT League",
    "VIEW_PATH": "src/app",
    "PROFILE": {
        "GENDERS": [
            {
                name: 'Unknown',
                id: 'Unknown'
            },
            {
                name: 'Male',
                id: 'male'
            },
            {
                name: 'Female',
                id: 'female'
            },
            {
                name: 'Other',
                id: 'other'
            }
        ]
    }
};

angular.module('ncs').constant('COMMON', common);
