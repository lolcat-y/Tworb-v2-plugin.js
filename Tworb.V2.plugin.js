/**================================================
 
   ████████╗██╗    ██╗ ██████╗ ██████╗ ██████╗ ██╗
   ╚══██╔══╝██║    ██║██╔═══██╗██╔══██╗██╔══██╗██║
      ██║   ██║ █╗ ██║██║   ██║██████╔╝██████╔╝██║
      ██║   ██║███╗██║██║   ██║██╔══██╗██╔══██╗╚═╝
      ██║   ╚███╔███╔╝╚██████╔╝██║  ██║██████╔╝██╗
      ╚═╝    ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚═╝
  =================================================
 * @name Tworb
 * @version 0.0.2
 * @Programmer https://github.com/Tworb
 * @Instagram https://www.instagram.com/vtworbii/
 * @Discord Tworb!#0001
 * @Youtube https://www.youtube.com/channel/UCqwyjQcgslu3kZgWABPdrag
 * @pastebin https://pastebin.com/u/Tworb
 * @Voice Max
 * @Volume Max
 * @API On
 * @Dev https://www.instagram.com/ufonet.03c8/
 * @Dev A̷n̷o̷n̷y̷m̷o̷u̷s̷#1337 / sigh#0001
 =================================================
 */
/*@cc_on
@if (@_jscript)
	
// Offer to self-install for clueless users that try to run this directly.
var shell = WScript.CreateObject("WScript.Shell");
var fs = new ActiveXObject("Scripting.FileSystemObject");
var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\\BetterDiscord\\plugins");
var pathSelf = WScript.ScriptFullName;
// Put the user at ease by addressing them in the first person
shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
     shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
	} else if (!fs.FolderExists(pathPlugins)) {
		shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
	} else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
	// Show the user where to put plugins in the future
shell.Exec("explorer " + pathPlugins);
  shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
	}
	WScript.Quit();
@else@*/
module.exports = (() => {
   const config = {"main":"index.js","info":{"name":"Tworb!","authors":[{"name":"████ 💦✅😈 Tworb!#0001 🧊 A̷n̷o̷n̷y̷m̷o̷u̷s̷#1337 / sigh#0001 👑✅💦 ████","discord_id":"815098156202721290","discord_username":"Tworb!#0001"}],"website":"https://www.youtube.com/channel/UCqwyjQcgslu3kZgWABPdrag","version":"0.0.2","description":"Tworb! Plugin Was Made By Tworb!#0001 & A̷n̷o̷n̷y̷m̷o̷u̷s̷#1337 Tworb Ig:@Tworbii Anon Ig:ufonet.03c8  📢✅👑⚡😈🚀🚫🔵🔴💲💯🔞📵🔇🛑💫⭐🌌🛸⛽🥇🏆🎮🎯🤞🤞🏾🙏🏾💪🏾🎅🔊🔓📞🔫🖕🏻 ██████████████████████████████████████████████████████████████  ","website":"https://www.youtube.com/channel/UClS519fFjvc0TNmArUEprPg"},"status":[{"title":"Changes","items":["Warns if the plugin's not working"]}],"defaultConfig":[{"type":"switch","id":"enableToasts","name":"Patcher","note":"Warns about plugin stability via toasts notifier.","value":true}]};
   
                                  return !global.ZeresPluginLibrary ? class {
                             constructor() {this._config = config;}
                         getName() {return config.info.name;}
                                     getAuthor() {return config.info.authors.map(a => a.name).join(", ");}
                             getDescription() {return config.info.description;}
                                      getVersion() {return config.info.version;}
                                                                       load() {
                BdApi.showConfirmationModal("Library Missing", `The library plugin needed for ${config.info.name} is missing. Please click Download Now to install it.`, {
          confirmText: "Download Now",
          cancelText: "Cancel",
        onConfirm: () => {
     require("request").get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", async (error, response, body) => {
     if (error) return require("electron").shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js");
     await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
           });
                }
                   });
                        }
                          start() {}
                                     stop() {}
                                                 } : (([Plugin, Api]) => {
                                                                          const plugin = (Plugin, Library) => {
                                                                                                               const { WebpackModules, Patcher, Toasts } = Library;
   
                                                                                                                                           return class Quad extends Plugin {
                                                                                                                                     onStart() {
                                                                                                                                           const voiceSettingsStore = WebpackModules.getByProps("getEchoCancellation");
                                                                                                                                              if (
                                                                                                                                                   voiceSettingsStore.getNoiseSuppression() ||
                                                                                                                                                 voiceSettingsStore.getNoiseCancellation() ||
                                                                                                                                              voiceSettingsStore.getEchoCancellation()
                                                                                                                                               ) {
                                                                                                                                 if (this.settings.enableToasts) {
                                                                                                                      Toasts.show(
                            "You must go into the discord voice settings and disable echo cancellation, noise reduction, and noise suppression for Tworb!.plugin to work",
                     { type: "warning", timeout: 5000 }
                     );
               }
   // This would not work, noise reduction would be stuck to on
   // const voiceSettings = WebpackModules.getByProps("setNoiseSuppression");
   // 2nd arg is for analytics
   // voiceSettings.setNoiseSuppression(false, {});
   // voiceSettings.setEchoCancellation(false, {});
   // voiceSettings.setNoiseCancellation(false, {});
      }
   
                                                                                                                               const voiceModule = WebpackModules.getByPrototypes("setSelfDeaf");
                                                                                                                               Patcher.after(voiceModule.prototype, "initialize", this.replacement.bind(this));
                                                                                                                               }
                                                                                                                               replacement(thisObj, _args, ret) {
                                                                                                                               const setTransportOptions = thisObj.conn.setTransportOptions;
                                                                                                                               thisObj.conn.setTransportOptions = function (obj) {
                                                                                                                               if (obj.audioEncoder) {
                                                                                                                               obj.audioEncoder.params = {
                                                                                                                               Quad: "8",
                                                                                                                               };
                                                                                                                               obj.audioEncoder.channels = 8;
                                                                                                                                       obj.audioEncoder.freq = 982000;
                                                                                                                               } 
                                                                                                                               
                                                                                                                               if (obj.fec) {
                                                                                                                               obj.fec = false;
                                                                                                                               }
                                                                                                                               if (obj.encodingVoiceBitRate < 3840000) {
                                                                                                           obj.encodingVoiceBitRate = 5120000;
               
                                                                                                                }
                                                                                                                               setTransportOptions.call(thisObj, obj);
                                                                                                                               };
                                                                                                                               if (this.settings.enableToasts) {
                                                                                                                               Toasts.info("Made By Tworb! & Anonymous / sigh $250 📞👑");
                                                                                                                               }
                                                                                                                               return ret;
                                                                                                                               }
                                                                                                                               onStop() {
                                                                                                                               Patcher.unpatchAll();
                                                                                                                               }
                                                                                                                               getSettingsPanel() {
                                                                                                           const panel = this.buildSettingsPanel();
                                                                                    return panel.getElement();
                                                                                  }
                                                                                 };
                                                                                };
                                                      return plugin(Plugin, Api);
                       })(global.ZeresPluginLibrary.buildPlugin(config));
                   })();
   /*@end@*/
   // 