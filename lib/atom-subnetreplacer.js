'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {'atom-subnetreplacer:tomask': () => this.tomask()}));
    this.subscriptions.add(atom.commands.add('atom-workspace', {'atom-subnetreplacer:toinversemask': () => this.toinversemask()}));
    this.subscriptions.add(atom.commands.add('atom-workspace', {'atom-subnetreplacer:toprefix': () => this.toprefix()}));
  },

  deactivate() {
    this.subscriptions.dispose();
  },


  tomask() {
    const editor = atom.workspace.getActiveTextEditor()
    //var iteratortest = new Function('a','return a.replace("koekoek")');
    if (editor) {
      const selection = editor.getSelectedText()
  //    const selrange = editor.getSelectedBufferRange()
  //    editor.scanInBufferRange('\/\d\d', selrange , iteratortest)
      if (selection == '/32') { editor.insertText(`255.255.255.255`); }
      if (selection == '/31') { editor.insertText(`255.255.255.254`); }
      if (selection == '/30') { editor.insertText(`255.255.255.252`); }
      if (selection == '/29') { editor.insertText(`255.255.255.248`); }
      if (selection == '/28') { editor.insertText(`255.255.255.240`); }
      if (selection == '/27') { editor.insertText(`255.255.255.224`); }
      if (selection == '/26') { editor.insertText(`255.255.255.192`); }
      if (selection == '/25') { editor.insertText(`255.255.255.128`); }
      if (selection == '/24') { editor.insertText(`255.255.255.0`); }
      if (selection == '/23') { editor.insertText('255.255.254.0'); }
      if (selection == '/22') { editor.insertText(`255.255.252.0`); }
      if (selection == '/21') { editor.insertText('255.255.248.0'); }
      if (selection == '/20') { editor.insertText(`255.255.240.0`); }
      if (selection == '/19') { editor.insertText(`255.255.224.0`); }
      if (selection == '/18') { editor.insertText(`255.255.192.0`); }
      if (selection == '/17') { editor.insertText(`255.255.128.0`); }
      if (selection == '/16') { editor.insertText(`255.255.0.0`); }
      if (selection == '/15') { editor.insertText(`255.254.0.0`); }
      if (selection == '/14') { editor.insertText(`255.252.0.0`); }
      if (selection == '/13') { editor.insertText(`255.248.0.0`); }

      if (selection == '0.0.0.0') { editor.insertText(`255.255.255.255`); }
      if (selection == '0.0.0.1') { editor.insertText(`255.255.255.254`); }
      if (selection == '0.0.0.3') { editor.insertText(`255.255.255.252`); }
      if (selection == '0.0.0.7') { editor.insertText(`255.255.255.248`); }
      if (selection == '0.0.0.15') { editor.insertText(`255.255.255.240`); }
      if (selection == '0.0.0.31') { editor.insertText(`255.255.255.224`); }
      if (selection == '0.0.0.63') { editor.insertText(`255.255.255.192`); }
      if (selection == '0.0.0.127') { editor.insertText(`255.255.255.128`); }
      if (selection == '0.0.0.255') { editor.insertText(`255.255.255.0`); }
      if (selection == '0.0.1.255') { editor.insertText('255.255.254.0'); }
      if (selection == '0.0.3.255') { editor.insertText(`255.255.252.0`); }
      if (selection == '0.0.7.255') { editor.insertText('255.255.248.0'); }
      if (selection == '0.0.15.255') { editor.insertText(`255.255.240.0`); }
      if (selection == '0.0.31.255') { editor.insertText(`255.255.224.0`); }
      if (selection == '0.0.63.255') { editor.insertText(`255.255.192.0`); }
      if (selection == '0.0.127.255') { editor.insertText(`255.255.128.0`); }
      if (selection == '0.0.255.255') { editor.insertText(`255.255.0.0`); }
      if (selection == '0.1.255.255') { editor.insertText(`255.254.0.0`); }
      if (selection == '0.3.255.255') { editor.insertText(`255.252.0.0`); }
      if (selection == '0.7.255.255') { editor.insertText(`255.248.0.0`); }
    }
  },

  toinversemask() {
    const editor = atom.workspace.getActiveTextEditor()
    if (editor) {
      const selection = editor.getSelectedText()
      if (selection == '/32') { editor.insertText(`0.0.0.0`); }
      if (selection == '/31') { editor.insertText(`0.0.0.1`); }
      if (selection == '/30') { editor.insertText(`0.0.0.3`); }
      if (selection == '/29') { editor.insertText(`0.0.0.7`); }
      if (selection == '/28') { editor.insertText(`0.0.0.15`); }
      if (selection == '/27') { editor.insertText(`0.0.0.31`); }
      if (selection == '/26') { editor.insertText(`0.0.0.63`); }
      if (selection == '/25') { editor.insertText(`0.0.0.127`); }
      if (selection == '/24') { editor.insertText(`0.0.0.255`); }
      if (selection == '/23') { editor.insertText(`0.0.1.255`); }
      if (selection == '/22') { editor.insertText(`0.0.3.255`); }
      if (selection == '/21') { editor.insertText(`0.0.7.255`); }
      if (selection == '/20') { editor.insertText(`0.0.15.255`); }
      if (selection == '/19') { editor.insertText(`0.0.31.255`); }
      if (selection == '/18') { editor.insertText(`0.0.63.255`); }
      if (selection == '/17') { editor.insertText(`0.0.127.255`); }
      if (selection == '/16') { editor.insertText(`0.0.255.255`); }
      if (selection == '/15') { editor.insertText(`0.1.255.255`); }
      if (selection == '/14') { editor.insertText(`0.3.255.255`); }
      if (selection == '/13') { editor.insertText(`0.7.255.255`); }

      if (selection == '255.255.255.255') { editor.insertText(`0.0.0.0`); }
      if (selection == '255.255.255.254') { editor.insertText(`0.0.0.1`); }
      if (selection == '255.255.255.252') { editor.insertText(`0.0.0.3`); }
      if (selection == '255.255.255.248') { editor.insertText(`0.0.0.7`); }
      if (selection == '255.255.255.240') { editor.insertText(`0.0.0.15`); }
      if (selection == '255.255.255.224') { editor.insertText(`0.0.0.31`); }
      if (selection == '255.255.255.192') { editor.insertText(`0.0.0.63`); }
      if (selection == '255.255.255.128') { editor.insertText(`0.0.0.127`); }
      if (selection == '255.255.255.0') { editor.insertText(`0.0.0.255`); }
      if (selection == '255.255.254.0') { editor.insertText(`0.0.1.255`); }
      if (selection == '255.255.252.0') { editor.insertText(`0.0.3.255`); }
      if (selection == '255.255.248.0') { editor.insertText(`0.0.7.255`); }
      if (selection == '255.255.240.0') { editor.insertText(`0.0.15.255`); }
      if (selection == '255.255.224.0') { editor.insertText(`0.0.31.255`); }
      if (selection == '255.255.192.0') { editor.insertText(`0.0.63.255`); }
      if (selection == '255.255.128.0') { editor.insertText(`0.0.127.255`); }
      if (selection == '255.255.0.0') { editor.insertText(`0.0.255.255`); }
      if (selection == '255.254.0.0') { editor.insertText(`0.1.255.255`); }
      if (selection == '255.252.0.0') { editor.insertText(`0.3.255.255`); }
      if (selection == '255.248.0.0') { editor.insertText(`0.7.255.255`); }



    }
  },

  toprefix() {
    const editor = atom.workspace.getActiveTextEditor()
    if (editor) {
      const selection = editor.getSelectedText()
      if (selection == '0.0.0.0') { editor.insertText(`/32`); }
      if (selection == '0.0.0.1') { editor.insertText(`/31`); }
      if (selection == '0.0.0.3') { editor.insertText(`/30`); }
      if (selection == '0.0.0.7') { editor.insertText(`/29`); }
      if (selection == '0.0.0.15') { editor.insertText(`/28`); }
      if (selection == '0.0.0.31') { editor.insertText(`/27`); }
      if (selection == '0.0.0.63') { editor.insertText(`/26`); }
      if (selection == '0.0.0.127') { editor.insertText(`/25`); }
      if (selection == '0.0.0.255') { editor.insertText(`/24`); }
      if (selection == '0.0.1.255') { editor.insertText('/23'); }
      if (selection == '0.0.3.255') { editor.insertText(`/22`); }
      if (selection == '0.0.7.255') { editor.insertText('/21'); }
      if (selection == '0.0.15.255') { editor.insertText(`/20`); }
      if (selection == '0.0.31.255') { editor.insertText(`/19`); }
      if (selection == '0.0.63.255') { editor.insertText(`/18`); }
      if (selection == '0.0.127.255') { editor.insertText(`/17`); }
      if (selection == '0.0.255.255') { editor.insertText(`/16`); }
      if (selection == '0.1.255.255') { editor.insertText(`/15`); }
      if (selection == '0.3.255.255') { editor.insertText(`/14`); }
      if (selection == '0.7.255.255') { editor.insertText(`/13`); }

      if (selection == '255.255.255.255') { editor.insertText(`/32`); }
      if (selection == '255.255.255.254') { editor.insertText(`/31`); }
      if (selection == '255.255.255.252') { editor.insertText(`/30`); }
      if (selection == '255.255.255.248') { editor.insertText(`/29`); }
      if (selection == '255.255.255.240') { editor.insertText(`/28`); }
      if (selection == '255.255.255.224') { editor.insertText(`/27`); }
      if (selection == '255.255.255.192') { editor.insertText(`/26`); }
      if (selection == '255.255.255.128') { editor.insertText(`/25`); }
      if (selection == '255.255.255.0') { editor.insertText(`/24`); }
      if (selection == '255.255.254.0') { editor.insertText(`/23`); }
      if (selection == '255.255.252.0') { editor.insertText(`/22`); }
      if (selection == '255.255.248.0') { editor.insertText(`/21`); }
      if (selection == '255.255.240.0') { editor.insertText(`/20`); }
      if (selection == '255.255.224.0') { editor.insertText(`/19`); }
      if (selection == '255.255.192.0') { editor.insertText(`/18`); }
      if (selection == '255.255.128.0') { editor.insertText(`/17`); }
      if (selection == '255.255.0.0') { editor.insertText(`/16`); }
      if (selection == '255.254.0.0') { editor.insertText(`/15`); }
      if (selection == '255.252.0.0') { editor.insertText(`/14`); }
      if (selection == '255.248.0.0') { editor.insertText(`/13`); }

    }
  }

};
