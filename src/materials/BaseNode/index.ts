import { Graph } from "@antv/x6";
import { Dnd } from "@antv/x6-plugin-dnd";

import config from "./config";
import ConfigForm from "./config-form.vue";
import View from "./view.vue";

export default class BaseNode {
  static NodeType = "base-node";
  static Shape = "base-node";

  static MaterialView = View;
  static DisplayView: any = View;
  static ConfigFormView: any = ConfigForm;
  static initConfig = config;

  static addToGraph(graph: Graph, e: MouseEvent) {
    const node = graph.createNode(this.initConfig);
    const dnd = new Dnd({ target: graph });
    dnd.start(node, e);
  }
}
