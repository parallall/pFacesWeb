pFaces Orion Plugin<br/>
version: 1.0<br/>
pFacesCli is a orion plugin tool that allows communication with pFaces.<br/>
1-Make an account in Orion Hub: https://orionhub.org<br/>
2-Install Orion on the loclhost: https://wiki.eclipse.org/Orion/How_Tos/Install_Orion_on_Localhost<br/>
3-How to install the plugin: https://wiki.eclipse.org/Orion/Documentation/Developer_Guide/Simple_plugin_example<br/>
4-How to modify the plugin: https://wiki.eclipse.org/Orion/Documentation/Developer_Guide/Plugging_into_the_shell<br/>
Commands:<br/>
pFacesCli login<br/>
pFacesCli check `<hwc>`<br/>
pFacesCli upload `<project>` `<hwc>`<br/>
pFacesCli compile `<project>` `<hwc>`<br/>
pFacesCli run `<project>` `<hwc>` `<device-list>`<br/>
pFacesCli list-HWCs<br/>
pFacesCli list-Jobs`<hwc>`<br/>
pFacesCli status`<hwc>` `<job>`<br/>
pFacesCli kill`<hwc>` `<job>`<br/>
Functionality:<br/>
login: login to all HWCs<br/>
check: Check Hardware configuration in pFaces<br/>
upload: Upload project to the server<br/>
compile: Compile project with pFaces<br/>
run: Run project with pFaces<br/>
list-HWCs: List all hardware configurations<br/>
list-Jobs: List all jobs<br/>
status: Check the status of a job<br/>
kill: Terminate a job<br/>
`<hwc>`: a Deployed hardware configuration<br/>
`<device-list>` a list of devices deployed in a hwc <br/>
`<project>`: a Project in Orion Editor <br/>
