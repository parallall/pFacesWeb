## pFaces Orion Plugin / version: 1.0
pFacesCli is an Exlipse-Orion plugin that allows communication with [pFacesAgent](https://github.com/parallall/pFacesAgent).<br/>

## Installation
1- Install Orion on the loclhost as shown [here](https://wiki.eclipse.org/Orion/How_Tos/Install_Orion_on_Localhost), or use directly any online-deployed version of Orion (e.g., [OrionHub](https://orionhub.org/)).<br/>
2- Launch Orion and install pFacesWeb as a plugin in Orion. This [tutorial](https://wiki.eclipse.org/Orion/Documentation/Developer_Guide/Simple_plugin_example) guides you how to install any plugin in Orion. When Installing the plugin, use the following source for the plugin: <https://pfaces.parallall.com/orionPlugin/index.html>.<br/>
3- Once installed, switch to the settings tab and navigate to the plugin settings. It should look similar to as shown in the next image. Fill the configuration as follows:

![pFacesWeb](https://github.com/parallall/pFacesWeb/blob/master/HWCs.png?raw=true)<br/>

userID: Use any user id you like (no spaces)<br/>
GitHub address: Not Necessary for now<br/>
HWC address: a semicolon-separated link of IP-addresses or domain names pointing to HPC machines (a.k.a HWC) with pFaces and pFacesAgent installed <br/>

## Usage
pFacesWeb can be used directly from the shell of Orion. Switch to the Shell tab in orion and use any of the following commands:


| Command  | Usage  |
|---|---|
| pFacesCli login  |  request login from all configured HWCs |
| pFacesCli list-HWCs  | lists all HWCs and the status of each one  |
| pfacesCli list-devices `<hwc_id>` |  lists all devices in a specific HWC |
| pFacesCli upload `<project>` `<hwc_id>`  | uploads project to specific HWC  |
| pFacesCli run `<project>` `<hwc_id>` `<device_id>`  | runs a project already uploaded to HWC on a specific device in that HWC  |
| pFacesCli list-Jobs `<hwc_id>`  | lists all the run-jobs in a specific HWC |
| pFacesCli kill `<hwc_id>` `<job_id>` | kills a job running in an HWC |
| pFacesCli job-details `<hwc_id>` `<job_id>` | shows the outut/details of a job in an HWC |
