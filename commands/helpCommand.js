const helpCommand= "pFacesCli help";
var helpProperties = {
  name: helpCommand,
  description: "Shows all arguments",
  returnType: "string"
};

var helpImpl = {
  callback: function(args, context) {
      var message="pFacesCli is a orion plugin tool that allows communication with pFaces.\n\n\
Commands:\n\
     pFacesCli check <HW>\n\
     pFacesCli update [-h]\n\
     pFacesCli upload <project>\n\
     pFacesCli compile <project>\n\
     pFacesCli run <project> <config-file>\n\
     pFacesCli list-HWCs [-h]\n\
     pFacesCli list-Jobs [-h]\n\
     pFacesCli status <job>\n\
     pFacesCli kill <job>\n\n\
Functionality:\n\
     check: Check Hardware configuration in pFaces\n\
     update: Update pFacesCli,\n\
     upload: Upload project to the server\n\
     compile: Compile project with pFaces,\n\
     run: Run project with pFaces,\n\
     list-HWCs: List all hardware configurations,\n\
     list-Jobs: List all jobs,\n\
     status: Check the status of a job\n\
     kill: Terminate a job\n\
     <HW>: a Deployed hardware\n\
     <project>: a Project in Orion Editor\n\
     [-h]: help function that shows avialabe option for a certain commands";
       return message;

  }
};
