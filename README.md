## pFaces Orion Plugin / version: 1.0
pFacesCli is an Exlipse-Orion plugin that allows communication with [pFacesAgent](https://github.com/parallall/pFacesAgent).<br/>

## Installation
1- Install Orion on the loclhost as shown [here](https://wiki.eclipse.org/Orion/How_Tos/Install_Orion_on_Localhost), or use directly any online-deployed version of Orion (e.g., [OrionHub](https://orionhub.org/)).<br/>
2- Launch Orion and install pFacesWeb as a plugin in Orion. This [tutorial](https://wiki.eclipse.org/Orion/Documentation/Developer_Guide/Simple_plugin_example) guides you how to install any plugin in Orion. When Installing the plugin, use the following source for the plugin: <https://pfaces.parallall.com/orionPlugin/index.html>.<br/>
3- Once installed, switch to the settings tab and navigate to the plugin settings. It should look similar to as shown in the next image. Fill the configuration as follows:

![pFacesWeb](https://github.com/parallall/pFacesWeb/blob/master/HWCs.png?raw=true)<br/>

userID: Use any user id you like (no spaces)<br/>
GitHub address: Not Necessary for now<br/>
HWC address: a semicolon-separated link of IP-addresses or domain names pointing to HWC machines with pFaces and pFacesAgent installed <br/>

## Usage
pFacesWeb can be used directly from the shell of Orion. Switch to the Shell tab in orion and use any of the following commands:

pFacesCli login<br/>
pFacesCli upload `<project>` `<hwc>`<br/>
pFacesCli run `<project>` `<hwc>` `<device>`<br/>
pFacesCli list-HWCs<br/>
pFacesCli list-Jobs`<hwc>`<br/>

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
