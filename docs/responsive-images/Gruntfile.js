module.exports = function (grunt) {
    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: "gm",
                    sizes: [{
                            name: "xs",
                            suffix: "_1x",
                            quality: 80,
                            width: 300
                        },
                        {
                            name: "xs",
                            suffix: "_2x",
                            quality: 80,
                            width: 600
                        },
                        {
                            name: "sm",
                            suffix: "_1x",
                            quality: 80,
                            width: 800
                        },
                        {
                            name: "sm",
                            suffix: "_2x",
                            quality: 80,
                            width: 1600
                        },
                        {
                            name: "md",
                            suffix: "_1x",
                            quality: 80,
                            width: 1000
                        },
                        {
                            name: "md",
                            suffix: "_2x",
                            quality: 80,
                            width: 2000
                        },
                        {
                            name: "lg",
                            suffix: "_1x",
                            quality: 80,
                            width: 1200
                        },
                        {
                            name: "lg",
                            suffix: "_2x",
                            quality: 80,
                            width: 1200
                        },
                        {
                            name: "xl",
                            suffix: "_1x",
                            quality: 80,
                            width: 2000
                        },
                        {
                            name: "xl",
                            suffix: "_2x",
                            quality: 80,
                            width: 2000
                        },
                    ],
                },
                files: [{
                    expand: true,
                    src: ["**/*.{jpg,jpeg,png}"],
                    cwd: "src/",
                    dest: "dest/",
                }, ],
            },
        },
        cwebp: {
            dynamic: {
                options: {
                    q: 60,
                },
                files: [{
                    expand: true,
                    cwd: "dest/",
                    src: ["**/*.{jpg,jpeg,png}"],
                    dest: "dest/",
                }, ],
            },
        },
    });
    grunt.loadNpmTasks("grunt-responsive-images");
    grunt.loadNpmTasks("grunt-cwebp");
    grunt.registerTask("default", ["responsive_images", "cwebp"]);
};
