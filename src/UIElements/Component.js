class Component {
    constructor(hostId, templateId) {
      this.hostEl = document.getElementById(hostId);
      this.templateEl = document.getElementById(templateId);
      const importedNode = document.importNode(this.templateEl.content, true);
      this.el = importedNode.firstElementChild;
      this.attach();
    }
  
    attach() {
      this.hostEl.append(this.el);
    }
  }

  export default Component;