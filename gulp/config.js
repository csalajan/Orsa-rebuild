var build = 'build';
var development = 'build/development';
var production = 'build/production';
var root = 'C:\\Users\\Craig\\projects\\tournament\\';

module.exports = {
    development: {
        index: 'index.html',
        htaccess: '.htaccess',
        root: development,
        documentation: {
            files: [
                'app/src/**/*.js',
                '!app/src/**/*.spec.js'
            ],
            destination: 'documentation'
        }
    },
    api: {
        files: [
            'api/**/*'
        ],
        destination: build
    },
    production: {
        viewPath: 'views/'
    },
    styles: {
        destination: development + '/css',
        files: [
            'styles/src/*.scss',
            'app/src/**/*.scss'
        ],
        dependencies: [
            'styles/dependencies/font-awesome.min.css'
        ]
    },
    scripts: {
        destination: development + '/js',
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/angular-messages/angular-messages.js',
            'app/src/app.js',
            'app/src/**/*.js',
            '!app/src/**/*.spec.js'
        ],
        jshint: {
            files: [
                'app/src/**/*.js'
            ]
        }
    },
    fonts: {
        destination: development + '/fonts',
        files: [
            'styles/fonts/*'
        ]
    },
    views: {
        destination: development + '/views',
        files: [
            'app/src/**/*.html'
        ]
    },
    karma: {
        configFile:  root + 'karma.conf.js'
    },
    rsync: {
        src: development,
        options: {
            destination: '~/ncs/dev',
            root: development,
            hostname: 'craig@craigsalajan.me',
            incremental: true,
            progress: true,
            relative: true,
            emptyDirectories: true,
            recursive: true,
            clean: true
        }
    },
    sftp: {
        src: development + '/**/*',
        options: {
            host: 'craigsalajan.me',
            user: 'craig',
            remotePath: '/home/craig/ncs/dev'

        }
    }
};