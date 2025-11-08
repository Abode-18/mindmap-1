
const allNodes = [
{ id: 'main', label: "الخواص والتغيرات", x: 0, y: 0, fixed: true },
    { id:'حالات المادة', label: "حالات المادة", x: 200, y: -300, hidden: true },
    { id: '1-1', label: "المادة الصلبة (شكل وحجم محددان، جسيمات متراصة)", x: 500, y: -500, hidden: true },
    { id: '1-2', label: "المادة السائلة (لها صفة الجريان، حجم ثابت، تأخذ شكل الوعاء)", x: 500, y: -400, hidden: true },
    { id: '1-3', label: "المادة الغازية (شكل وحجم غير ثابتين، قابلة للانضغاط)", x: 500, y: -300, hidden: true },
    { id: '1-4', label: 'البلازما (غاز متأين، غير شائع، يوجد في النجوم ولوحات النيون)', x: 500, y: -200, hidden: true },
    { id: '1-5', label: 'البخار (حالة غازية توجد بشكل صلب/سائل في درجات حرارة عادية)', x: 500, y: -100, hidden: true },
    
    { id: 'خواص المادة', label: "خواص المادة", x: 200, y: -100, hidden: true },
    { id: '2-1', label: "خواص فيزيائية (ملاحظة/قياس دون تغيير التركيب)", x: 500, y: -200, hidden: true },
        { id: '2-1-1', label:"مميزة (لا تعتمد على الكمية: اللون، الكثافة، درجة الغليان)", x: 700, y: -300, hidden: true },
        { id: '2-1-2', label:"غير مميزة (تعتمد على الكمية: الكتلة، الحجم، الطول)", x: 700, y: -100, hidden: true },
    { id: '2-2', label: "خواص كيميائية (قدرة المادة على الاتحاد أو التحول لمادة أخرى)", x: 500, y: 0, hidden: true },

    { id: "تغيرات المادة", label: "تغيرات المادة", x: 200, y: 100, hidden: true },
    { id: '3-1', label: "تغيرات فيزيائية (تغير في المظهر والشكل، مثال: تغير الحالة، تقطيع الورق)", x: 500, y: 0, hidden: true },
    { id: '3-2', label: "تغيرات كيميائية (تغير في التركيب والخواص، تكوين مواد جديدة، مثال: الاحتراق، التعفن، تكون الصدأ)", x: 500, y: 200, hidden: true },
    { id: "قانون حفظ الكتلة", label: "قانون حفظ الكتلة", x: 200, y: 300, hidden: true },
    { id: '4-1', label: "الكتلة لا تفنى ولا تستحدث في أثناء التفاعل الكيميائي", x: 500, y: 200, hidden: true },
    { id: '4-2', label: "كتلة المتفاعلات = كتلة النواتج", x: 500, y: 400, hidden: true },


    { id:"المخاليط والمحاليل", label: "المخاليط والمحاليل", x: -200, y: -300, hidden: true },
    { id:'6-1', label: 'المخلوط: مزيج من مادتين أو أكثر تحتفظ كل مادة بخواصها', x: -400, y: -500, hidden: true },
    { id:'6-2', label: "انواع المخاليط", x: -400, y: -350, hidden: true },
        { id:'6-2-1', label: "متجانس (تركيب ثابت، لا يمكن التمييز بين المكونات، مثال: الشاي، السبائك)", x: -700, y: -400, hidden: true },
        { id:'6-2-2', label: "غير متجانس (تركيب غير منتظم، يمكن التمييز، مثال: السلطة)", x: -700, y: -300, hidden: true },
    { id:'6-3', label: "المحلول", x: -400, y: -200, hidden: true },
        { id:'6-3-1', label: "مخلوط متجانس (مذيب ومذاب)", x: -600, y: -250, hidden: true },
        { id:'6-3-2', label: "السبيكة: مخلوط متجانس من الفلزات", x: -600, y: -150, hidden: true },
    { id:'6-4', label: "طرق فصل المخاليط (عمليات فيزيائية)", x: -400, y: 0, hidden: true },
        { id:'6-4-1', label: "الترشيح (فصل صلب عن سائل بحاجز مسامي)", x: -700, y: -200, hidden: true },
        { id:'6-4-2', label: "الكروماتوغرافيا (اعتماداً على الانجذاب لسطح مادة أخرى)", x: -700, y: -100, hidden: true },
        { id:'6-4-3', label: "التقطير (اعتماداً على الاختلاف في درجة الغليان)", x: -700, y: 0, hidden: true },
        { id:'6-4-4', label: "التبلور (فصل مادة صلبة نقية من محلولها)", x: -700, y: 100, hidden: true },
        { id:'6-4-5', label: "التسامي (تبخر المادة الصلبة دون المرور بالسائلة)", x: -700, y: 200, hidden: true },

    { id:"العناصر والمركبات", label: "العناصر والمركبات", x: -200, y: 300, hidden: true },
    { id:'7-1', label: "العنصر: مادة نقية تحوي نوع واحد من الذرات، لا يمكن تجزئتها", x: -500, y: 100, hidden: true },
    { id:'7-2', label: "المركب", x: -400, y: 300, hidden: true },
    { id:'7-2-1', label: "يتكون من عنصرين أو أكثر متحدين كيميائياً", x: -600, y: 200, hidden: true },
    { id:'7-2-2', label: "يمكن تجزئته بطرائق كيميائية (مثل التحليل الكهربائي للماء)", x: -600, y: 400, hidden: true },
    { id:'7-3', label: "قوانين الكتلة", x: -400, y: 500, hidden: true },
        { id:'7-3-1', label: "قانون النسب الثابتة (المركب يتكون من العناصر نفسها بنسب كتلية ثابتة)", x: -600, y: 400, hidden: true },
        { id:'7-3-2', label: "قانون النسب المتضاعفة (نسبة بين كتل أحد العناصر التي تتحد مع كتلة ثابتة من عنصر آخر هي نسبة عددية بسيطة)", x: -600, y: 600, hidden: true },
];

const allEdges = [
{ from: "main", to: 'حالات المادة' },
    { from: 'حالات المادة', to: '1-1' },
    { from: 'حالات المادة', to: '1-2' },
    { from: 'حالات المادة', to: '1-3' },
    { from: 'حالات المادة', to: '1-4' },
    { from: 'حالات المادة', to: '1-5' },

{ from: "main", to: "خواص المادة" },
    { from: "خواص المادة", to: '2-1' },
    { from: "2-1", to: '2-1-1' },
    { from: "2-1", to: '2-1-2' },
    { from: "خواص المادة", to: '2-2' },

{ from: "main", to: "تغيرات المادة" },
    { from: "تغيرات المادة", to: '3-1' },
    { from: "تغيرات المادة", to: '3-2' },

{ from: "main", to: "قانون حفظ الكتلة" },
    {from: 'قانون حفظ الكتلة', to: '4-1'},
    {from: 'قانون حفظ الكتلة', to: '4-2'},
{ from: "main", to: "المخاليط والمحاليل" },
    { from: "المخاليط والمحاليل", to: "6-1"},
    { from: "المخاليط والمحاليل", to: "6-2"},
    { from: "6-2", to: "6-2-1"},
    { from: "6-2", to: "6-2-2"},
    { from: "المخاليط والمحاليل", to: "6-3"},
    { from: "6-3", to: "6-3-1"},
    { from: "6-3", to: "6-3-2"},
    { from: "المخاليط والمحاليل", to: "6-4"},
    { from: "6-4", to: "6-4-1"},
    { from: "6-4", to: "6-4-2"},
    { from: "6-4", to: "6-4-3"},
    { from: "6-4", to: "6-4-4"},
    { from: "6-4", to: "6-4-5"},

{ from: "main", to: "العناصر والمركبات" },
    { from: "العناصر والمركبات", to: "7-1"},
    { from: "العناصر والمركبات", to: "7-2"},
    { from: "7-2", to: "7-2-1"},
    { from: "7-2", to: "7-2-2"},
    { from: "العناصر والمركبات", to: "7-3"},
    { from: "7-3", to: "7-3-1"},
    { from: "7-3", to: "7-3-2"},
];

const nodes = new vis.DataSet(allNodes);
const edges = new vis.DataSet(allEdges.map(e => ({ ...e, hidden: true })));

const container = document.getElementById("mynetwork");
const data = { nodes, edges };

const options = {
physics: false,
nodes: {
    shape: "box",
    margin: 10,
    widthConstraint: { minimum: 100 },
    heightConstraint: { minimum: 40 },
    color: { background: "#f0f0f0", border: "#888" },
    font: { size: 16 }
},
edges: {
    arrows: "to",
    smooth: { type: "cubicBezier", roundness: 0.5 },
    color: { color: "#999" }
},
interaction: {
    hover: true,
    dragNodes: true,
    zoomView: true,
    dragView: true,
    navigationButtons: true,
    keyboard: true
},
manipulation: { enabled: false }
};

const network = new vis.Network(container, data, options);

// color nodes that have children
allNodes.forEach(node => {
const hasChildren = allEdges.some(e => e.from === node.id);
if (hasChildren) {
    nodes.update({
    id: node.id,
    color: {
        background: "#d6e8ff",
        border: "#4a90e2"
    }
    });
}
});

// always show main branches
allEdges.filter(e => e.from === "main").forEach(e => edges.update({ ...e, hidden: false }));

network.on("click", function (params) {
if (params.nodes.length === 0) return;
const nodeId = params.nodes[0];

const parent = getParent(nodeId);
if (parent) {
    const siblings = allEdges.filter(e => e.from === parent && e.to !== nodeId).map(e => e.to);
    siblings.forEach(sib => collapseNode(sib));
}

const children = allEdges.filter(e => e.from === nodeId).map(e => e.to);
const anyVisible = children.some(c => !nodes.get(c).hidden);

if (anyVisible) collapseNode(nodeId);
else expandNode(nodeId);
});

function getParent(nodeId) {
const edge = allEdges.find(e => e.to === nodeId);
return edge ? edge.from : null;
}

function expandNode(nodeId) {
const childrenEdges = allEdges.filter(e => e.from === nodeId);
const childIds = [];
childrenEdges.forEach(e => {
    nodes.update({ id: e.to, hidden: false });
    edges.update({ ...e, hidden: false });
    childIds.push(e.to);
});

if (childIds.length > 0) {
    const focusIds = [nodeId, ...childIds];
    network.focus(nodeId, {
    scale: 1.2,
    animation: { duration: 800, easingFunction: "easeInOutQuad" }
    });
    setTimeout(() => {
    network.fit({
        nodes: focusIds,
        animation: { duration: 800, easingFunction: "easeInOutQuad" }
    });
    }, 500);
}
}

function collapseNode(nodeId) {
const childrenEdges = allEdges.filter(e => e.from === nodeId);
childrenEdges.forEach(e => {
    collapseNode(e.to);
    nodes.update({ id: e.to, hidden: true });
    edges.update({ ...e, hidden: true });
});
}

network.once("stabilized", () => network.fit({ animation: true }));
window.addEventListener("resize", () => network.fit({ animation: true }));
