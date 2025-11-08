
const allNodes = [
{ id: 'main', label: "علم الكيمياء", x: 0, y: 0, fixed: true },
    { id:'حالات المادة', label: "تعريف الكيمياء والمادة", x: 200, y: -300, hidden: true },
    { id: '1-1', label: "علم يدرس المادة والتغيرات التي تطرأ عليها", x: 500, y: -400, hidden: true },
    { id: '1-2', label: "المادة", x: 500, y: -200, hidden: true },
    { id: '1-2-1', label: "كل شيء له كتلة ويشغل حيزا", x: 700, y: -300, hidden: true },
    { id: '1-2-2', label: "أمثلة: الهواء، الورق، الكتاب، التراب", x: 700, y: -200, hidden: true },
    { id: '1-2-3', label: "ليست مواد: الحرارة، الضوء، موجات الراديو", x: 700, y: -100, hidden: true },
    
    { id: 'خواص المادة', label: "الطرائق العلمية", x: 200, y: -100, hidden: true },
    { id: '2-1', label: "طريقة منظمة لحل المشكلات", x: 400, y: -200, hidden: true },
    { id: '2-2', label: "الخطوات", x: 400, y: 0, hidden: true },
        { id: '2-2-1', label:"الملاحظة (جمع المعلومات وطرح الأسئلة)", x: 650, y: -150, hidden: true },
        { id: '2-2-2', label:"الفرضية (تخمين علمي قابل للاختبار)", x: 650, y: -50, hidden: true },
        { id: '2-2-3', label:"التجريب", x: 650, y: 100, hidden: true },
            { id: '2-2-3-1', label:"المتغير المستقل (العامل الذي يتغير)", x: 900, y: -50, hidden: true },
            { id: '2-2-3-2', label:"المتغير التابع (تتغير قيمته تبعاً للمستقل)", x: 900, y: 50, hidden: true },
            { id: '2-2-3-3', label:"الثابت (العامل الذي لا يتغير)", x: 900, y: 150, hidden: true },
            { id: '2-2-3-4', label:"الضابط (العامل المستخدم للمقارنة)", x: 900, y: 250, hidden: true },

    { id: "تغيرات المادة", label: "الكتلة والوزن", x: 200, y: 100, hidden: true },
        { id: '3-1', label: "الكتلة: مقياس كمية المادة، ثابتة لا تتغير بتغير المكان", x: 500, y: 0, hidden: true },
        { id: '3-2', label: "الكتلة: مقياس كمية المادة، ثابتة لا تتغير بتغير المكان", x: 500, y: 200, hidden: true },
    
        { id: "قانون حفظ الكتلة", label: "النماذج في الكيمياء", x: 200, y: 300, hidden: true },
        { id: '4-1', label: "تفسير مرئي أو لفظي أو رياضي تجريبي", x: 500, y: 200, hidden: true },
        { id: '4-2', label: "تستخدم لدراسة المادة التي لا تُرى بالعين المجردة", x: 500, y: 400, hidden: true },


    { id:"المخاليط والمحاليل", label: "البحث العلمي", x: -200, y: -300, hidden: true },
    { id:'6-2', label: "انواع البحوث", x: -400, y: -450, hidden: true },
        { id:'6-2-1', label: "بحث نظري (للحصول على المعرفة، مثال: دراسة CFCs بدون دليل بيئي", x: -700, y: -550, hidden: true },
        { id:'6-2-2', label: "بحث تطبيقي (لحل مشكلة محددة، مثال: قياس CFCs)", x: -700, y: -450, hidden: true },
        { id:'6-2-3', label: "أبحاث غير مقصودة (اكتشفت بالصدفة/الخطأ)", x: -700, y: -350, hidden: true },
    { id:'6-3', label: "أمثلة لاكتشافات غير مقصودة", x: -400, y: -300, hidden: true },
        { id:'6-3-1', label: "البنسلين (ألكسندر فلمنج)", x: -600, y: -400, hidden: true },
        { id:'6-3-2', label: "خيوط النايلون (جوليان هيل)", x: -600, y: -200, hidden: true },
    { id:'6-4', label: "قواعد السلامة في المختبر", x: -400, y: -150, hidden: true },
        { id:'6-4-1', label: "العمل بوجود المعلم", x: -700, y: -200, hidden: true },
        { id:'6-4-2', label: "عدم تذوق المواد الكيميائية", x: -700, y: -100, hidden: true },
        { id:'6-4-3', label: "لبس معطف المختبر والقفازات والنظارات الواقية", x: -700, y: 0, hidden: true },
        { id:'6-4-4', label: "عدم إعادة المواد الفائضة لعبواتها الأصلية", x: -700, y: 100, hidden: true },

    {id: 'قصة الأوزون' , label: 'CFCs قصة الأوزون و', x:-200 , y:0, hidden:true},
        { id:'8-1', label: "(O3) الأوزون", x: -400, y: -100, hidden: true },
            { id:'8-1-1', label: "يتكون من 3 ذرات أكسجين", x: -600, y: -250, hidden: true },
            { id:'8-1-2', label: "يقع في طبقة الستراتوسفير", x: -600, y: -150, hidden: true },
            { id:'8-1-3', label: "(UV) أهميته: يحمي بامتصاص الأشعة فوق البنفسجية الضارة ", x: -650, y: -50, hidden: true },
            { id:'8-1-4', label: "(Du) المستوى الطبيعي: 300 دبسون", x: -600, y: 50, hidden: true },
        { id:'8-2', label: "ثقب الأوزون", x: -400, y: 0, hidden: true },
            { id:'8-2-1', label: "نقص سمك طبقة الأوزون فوق القارة المتجمدة الجنوبية", x: -650, y: -50, hidden: true },
            { id:'8-2-2', label: "السبب: مركبات الكلورو فلورو كربون (CFCs)", x: -650, y: 50, hidden: true },
        { id:'8-3', label: "CFCs: تستخدم في التكييف والتبريد، أكثر خطورة على الغلاف الجوي", x: -500, y: 150, hidden: true },

    { id:"العناصر والمركبات", label: "فروع علم الكيمياء", x: -200, y: 300, hidden: true },
    { id:'7-1', label: "كيمياء عضوية (تدرس المواد المحتوية على كربون)", x: -600, y: -150, hidden: true },
    { id:'7-2', label: "كيمياء غير عضوية (تدرس المواد التي لا تحتوي على كربون)", x: -600, y: -50, hidden: true },
    { id:'7-3', label: "كيمياء فيزيائية (سلوك المادة وتغيرات الطاقة، سرعة التفاعلات)", x: -600, y: 50, hidden: true },
    { id:'7-4', label: "كيمياء تحليلية (أنواع المادة ومكوناتها، ضبط جودة المنتجات)", x: -600, y: 150, hidden: true },
    { id:'7-5', label: "كيمياء حيوية (المادة والعمليات الحيوية، التمثيل الغذائي)", x: -600, y: 250, hidden: true },
    { id:'7-6', label: "كيمياء بيئية (المادة والبيئة، التلوث والدورات الكيميائية الحيوية)", x: -600, y: 350, hidden: true },
    { id:'7-7', label: "كيمياء صناعية (العمليات الكيميائية في الصناعة)", x: -600, y: 450, hidden: true },
    { id:'7-8', label: "كيمياء مبلمرات (المبلمرات والمواد البلاستيكية)", x: -600, y: 550, hidden: true },
    { id:'7-9', label: "كيمياء ذرية (نظريات وتركيب المادة، الروابط)", x: -600, y: 650, hidden: true },
    { id:'7-10', label: "كيمياء حرارية (الحرارة الناتجة عن العمليات)", x: -600, y: 750, hidden: true },

];

const allEdges = [
{ from: "main", to: 'حالات المادة' },
    { from: 'حالات المادة', to: '1-1' },
    { from: 'حالات المادة', to: '1-2' },
        { from: "1-2", to: '1-2-1' },
        { from: "1-2", to: '1-2-2' },
        { from: "1-2", to: '1-2-3' },


{ from: "main", to: "خواص المادة" },
    { from: "خواص المادة", to: '2-1' },
    { from: "خواص المادة", to: '2-2' },
        { from: "2-2", to: '2-2-1' },
        { from: "2-2", to: '2-2-2' },
        { from: "2-2", to: '2-2-3' },
            { from: "2-2-3", to: '2-2-3-1' },
            { from: "2-2-3", to: '2-2-3-2' },
            { from: "2-2-3", to: '2-2-3-3' },
            { from: "2-2-3", to: '2-2-3-4' },

{ from: "main", to: "تغيرات المادة" },
    { from: "تغيرات المادة", to: '3-1' },
    { from: "تغيرات المادة", to: '3-2' },

{ from: "main", to: "قانون حفظ الكتلة" },
    {from: 'قانون حفظ الكتلة', to: '4-1'},
    {from: 'قانون حفظ الكتلة', to: '4-2'},
{ from: "main", to: "المخاليط والمحاليل" },
    { from: "المخاليط والمحاليل", to: "6-2"},
    { from: "6-2", to: "6-2-1"},
    { from: "6-2", to: "6-2-2"},
    { from: "6-2", to: "6-2-3"},
    { from: "المخاليط والمحاليل", to: "6-3"},
    { from: "6-3", to: "6-3-1"},
    { from: "6-3", to: "6-3-2"},
    { from: "المخاليط والمحاليل", to: "6-4"},
    { from: "6-4", to: "6-4-1"},
    { from: "6-4", to: "6-4-2"},
    { from: "6-4", to: "6-4-3"},
    { from: "6-4", to: "6-4-4"},


{ from: "main", to: "العناصر والمركبات" },
    { from: "العناصر والمركبات", to: "7-1"},
    { from: "العناصر والمركبات", to: "7-2"},
    { from: "العناصر والمركبات", to: "7-3"},
    { from: "العناصر والمركبات", to: "7-4"},
    { from: "العناصر والمركبات", to: "7-5"},
    { from: "العناصر والمركبات", to: "7-6"},
    { from: "العناصر والمركبات", to: "7-7"},
    { from: "العناصر والمركبات", to: "7-8"},
    { from: "العناصر والمركبات", to: "7-9"},
    { from: "العناصر والمركبات", to: "7-10"},
{from: 'main', to: 'قصة الأوزون'},
    {from: 'قصة الأوزون', to: '8-1'},
        {from: '8-1', to:'8-1-1'},
        {from: '8-1', to:'8-1-2'},
        {from: '8-1', to:'8-1-3'},
        {from: '8-1', to:'8-1-4'},
    {from: 'قصة الأوزون', to: '8-2'},
        {from: '8-2', to:'8-2-1'},
        {from: '8-2', to:'8-2-2'},
    {from: 'قصة الأوزون', to: '8-3'},
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
