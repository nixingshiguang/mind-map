export default Render
declare class Render {
  constructor(opt?: {})
  opt: {}
  mindMap: any
  themeConfig: any
  draw: any
  renderTree: any
  reRender: boolean
  isRendering: boolean
  hasWaitRendering: boolean
  nodeCache: {}
  lastNodeCache: {}
  renderSource: string
  activeNodeList: any[]
  root: any
  textEdit: TextEdit
  lastBeingCopyData: any
  beingCopyData: any
  beingPasteText: string
  beingPasteImgSize: number
  currentBeingPasteType: string
  setLayout(): void
  layout:
    | MindMap
    | CatalogOrganization
    | OrganizationStructure
    | Timeline
    | VerticalTimeline
  bindEvent(): void
  registerCommands(): void
  selectAll(): void
  back(step: any): void
  forward(step: any): void
  insertNode(
    openEdit?: boolean,
    appointNodes?: any[],
    appointData?: any,
    appointChildren?: any[]
  ): void
  insertChildNode(
    openEdit?: boolean,
    appointNodes?: any[],
    appointData?: any,
    appointChildren?: any[]
  ): void
  upNode(): void
  downNode(): void
  insertAfter(node: any, exist: any): void
  insertBefore(node: any, exist: any): void
  moveNodeTo(node: any, toNode: any): void
  removeNode(appointNodes?: any[]): void
  pasteNode(data: any): void
  cutNode(callback: any): any
  setNodeStyle(node: any, prop: any, value: any): void
  setNodeStyles(node: any, style: any): void
  setNodeActive(node: any, active: any): void
  clearAllActive(): void
  setNodeExpand(node: any, expand: any): void
  expandAllNode(): void
  unexpandAllNode(): void
  expandToLevel(level: any): void
  setNodeData(node: any, data: any): void
  setNodeText(node: any, text: any, richText: any, resetRichText: any): void
  setNodeImage(node: any, data: any): void
  setNodeIcon(node: any, icons: any): void
  setNodeHyperlink(node: any, link: any, title?: string): void
  setNodeNote(node: any, note: any): void
  setNodeTag(node: any, tag: any): void
  addGeneralization(data: any): void
  removeGeneralization(): void
  setNodeCustomPosition(node: any, left?: any, top?: any): void
  resetLayout(): void
  setNodeShape(node: any, shape: any): void
  goTargetNode(node: any, callback?: () => void): void
  registerShortcutKeys(): void
  insertNodeWrap: () => void
  toggleActiveExpand(): void
  removeNodeWrap: () => void
  copy(): void
  cut(): void
  startTextEdit(): void
  endTextEdit(): void
  render(callback: () => void, source: any): void
  clearActive(): void
  addActiveNode(node: any): void
  removeActiveNode(node: any): void
  findActiveNodeIndex(node: any): number
  getNodeIndex(node: any): any
  formatAppointNodes(appointNodes: any): any[]
  setCoptyDataToClipboard(data: any): void
  paste(): void
  onPaste(): Promise<void>
  removeOneNode(node: any): void
  copyNode(): any
  toggleNodeExpand(node: any): void
  setNodeDataRender(node: any, data: any, notRender?: boolean): void
  moveNodeToCenter(node: any): void
  expandToNodeUid(uid: any, callback?: () => void): void
  findNodeByUid(uid: any): any
}
import TextEdit from './TextEdit'
import MindMap from '../../layouts/MindMap'
import CatalogOrganization from '../../layouts/CatalogOrganization'
import OrganizationStructure from '../../layouts/OrganizationStructure'
import Timeline from '../../layouts/Timeline'
import VerticalTimeline from '../../layouts/VerticalTimeline'
