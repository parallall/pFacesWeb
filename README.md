## pFaces Orion Plugin / version: 1.0
pFacesCli is an Exlipse-Orion plugin that allows communication with [pFacesAgent](https://github.com/parallall/pFacesAgent).<br/>

## Installation
1- Install Orion on the loclhost: https://wiki.eclipse.org/Orion/How_Tos/Install_Orion_on_Localhost. Or use directly any online-deployed version of Orion (e.g., [OrionHub](https://orionhub.org/)).<br/>
2- Install pFacesWeb as a plugin in Orion. This tutorial guides you how to install any plugin in Orion: https://wiki.eclipse.org/Orion/Documentation/Developer_Guide/Simple_plugin_example<br/>

## Usage
pFacesCli login<br/>
pFacesCli upload `<project>` `<hwc>`<br/>
pFacesCli run `<project>` `<hwc>` `<device>`<br/>
pFacesCli list-HWCs<br/>
pFacesCli list-Jobs`<hwc>`<br/>


## Specify Hardware Configuration
![pFacesWeb](https://github.com/parallall/pFacesWeb/blob/master/HWCs.png?raw=true)<br/>
Specify:<br/>
userID (Random for now)<br/>
GitHub address: Not Necessary for now<br/>
HWC address: http://10.162.253.132:8000/pFaces/REST/dictionary/pFacesAgentLoginagent_0<br/>

## Functionality:<br/>
login: login to all HWCs<br/>
upload: Upload project to the server<br/>
run: Run project with pFaces<br/>
list-HWCs: List all hardware configurations<br/>
list-Jobs: List all jobs<br/>
status: Check the status of a job<br/>
kill: Terminate a job<br/>

## Commands
`<hwc>`: Specify the target hardware configuration<br/>
`<device>` Specify device deployed in a hwc <br/>
`<project>`: Specify the project target in the Orion Editor <br/>
