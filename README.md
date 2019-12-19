pFaces Orion Plugin
version: 1.0
pFacesCli is a orion plugin tool that allows communication with pFaces.
1-Make an account in Orion Hub: https://orionhub.org
2-Install Orion on the loclhost: https://wiki.eclipse.org/Orion/How_Tos/Install_Orion_on_Localhost
3-How to install the plugin: https://wiki.eclipse.org/Orion/Documentation/Developer_Guide/Simple_plugin_example
4-How to modify the plugin: https://wiki.eclipse.org/Orion/Documentation/Developer_Guide/Plugging_into_the_shell
Commands:
pFacesCLi login
pFacesCli check <hwc>
pFacesCli upload <project> <hwc>
pFacesCli compile <project> <hwc>
pFacesCli run <project> <hwc> <device-list>
pFacesCli list-HWCs
pFacesCli list-Jobs <hwc>
pFacesCli status <hwc> <job>
pFacesCli kill <hwc> <job>
Functionality:
login: login to all HWCs
check: Check Hardware configuration in pFaces
update: Update pFacesCli
upload: Upload project to the server
compile: Compile project with pFaces
run: Run project with pFaces
list-HWCs: List all hardware configurations
list-Jobs: List all jobs
status: Check the status of a job
kill: Terminate a job
<HW>: a Deployed hardware
<project>: a Project in Orion Editor
