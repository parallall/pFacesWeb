var zipProperties = {
        name: "zip",
        description: "Archive files into a .zip",
        parameters: [{
            name: "files",
            type: {name: "file", file: true, directory: true, exist: true, multiple: true, content: true, recurse: true},
            description: "The files to add to the .zip"
        }],
        returnType: "blob"
    };
    var zipImpl = {
        callback: function(args) {
            var zip = new JSZip();
            var files = args.files;
            files.forEach(function(file) {
                var segments = file.path.split("/");
                var current = zip;
                var dirSegmentCount = segments.length - (file.isDirectory ? 0 : 1);
                for (var i = 0; i < dirSegmentCount; i++) {
                    var segment = segments[i];
                    if (segment !== ".") {
                        current = current.folder(segment);
                    }
                }
                if (!file.isDirectory) {
                    current.file(segments[dirSegmentCount], file.blob);
                }
            });
            return zip.generate({type:"blob"});
        }
    };
