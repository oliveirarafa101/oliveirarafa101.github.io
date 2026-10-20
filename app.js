const projectDetails = {
  truckmotion: `
    <p class="eyebrow">01 / PRODUCT DEVELOPMENT</p>
    <h2 id="dialog-title">TruckMotion</h2>
    <p class="dialog-intro">Transport operations bring together people, requests, vehicles and billing. TruckMotion connects those moving parts in a shared workflow.</p>
    <div class="detail-columns"><div><h3>THE PROBLEM</h3><p>Clients send requests, traffic managers plan and assign services, and drivers report the work. Keeping those steps connected requires consistent operational data and integrations with the tools each team already uses.</p></div><div><h3>MY CONTRIBUTION</h3><p>Development and evolution of the application and its integrations, covering transport data, scheduling, driver workflows, AI email intake and support for billing.</p></div></div>
    <div class="detail-flow" aria-label="Transport workflow"><span><small>01 / CLIENT</small>Transport request</span><span><small>02 / TRAFFIC MANAGER</small>Review, plan and assign</span><span><small>03 / DRIVER</small>Execute and record</span><span><small>04 / OPERATIONS</small>Follow up and bill</span></div>
    <section class="detail-section"><h3>HOW IT FITS TOGETHER</h3><p>The Flask application runs on Render, with SQLite for operational data and scheduled tasks for GPS updates, notifications and backups. A separate Jetson service runs Ollama for AI interpretation of incoming requests.</p></section>
    <section class="detail-section"><h3>INTEGRATIONS WITH A PURPOSE</h3><table class="integration-table"><thead><tr><th scope="col">Integration</th><th scope="col">Role</th></tr></thead><tbody><tr><td>Outlook / Power Automate</td><td>Forward incoming requests to the application through a webhook.</td></tr><tr><td>Jetson / Ollama</td><td>Interpret transport requests and support structured intake.</td></tr><tr><td>PAJ GPS</td><td>Retrieve vehicle positions for operational tracking.</td></tr><tr><td>Telegram</td><td>Deliver operational alerts and summaries.</td></tr><tr><td>DGEG / Google Drive</td><td>Fuel price reference and external backups, respectively.</td></tr><tr><td>Primavera / ERP</td><td>Import clients and articles in XML, use SAF-T data and prepare billing through Excel workflows.</td></tr></tbody></table></section>
    <section class="detail-section"><h3>ENGINEERING DETAILS THAT MATTER</h3><ul class="detail-list"><li>Email intake anchors relative dates to the message’s reception time in Europe/Lisbon.</li><li>Client and article matching keeps ambiguous results available for traffic manager review.</li><li>ERP integration distinguishes API calls from file exchange. Invoice preparation still includes user review in the ERP.</li></ul></section>
    <p class="detail-note">TruckMotion is the project maintained in the BillApp repository. This overview describes the Flask implementation. Project visuals are illustrative and contain no live customer or transport data.</p>`,
  thesis: `
    <p class="eyebrow">02 / THESIS & PROTOTYPE</p>
    <h2 id="dialog-title">Integrated Systems Framework</h2>
    <p class="dialog-intro">A framework for coordinating processes across applications with different technologies and interfaces.</p>
    <div class="detail-columns"><div><h3>THE RESEARCH PROBLEM</h3><p>Business processes often cross several applications. The challenge is to coordinate those steps without tying the entire process to the implementation language or interface of any single system.</p></div><div><h3>MY CONTRIBUTION</h3><p>Framework conception, architecture design and prototype implementation. The approach separates process execution, identity and integrations, using compatible contracts and connectors between systems.</p></div></div>
    <section class="detail-section"><h3>ARCHITECTURE</h3><p>The BPMN Engine executes processes. The Process Execution Manager coordinates execution. The serverless service and Integration Layer connect external systems, while IAM handles identity and access. Interfaces reach the framework through the Core Gateway.</p></section>
    <div class="diagram-controls" role="group" aria-label="Choose a thesis architecture diagram"><button data-diagram="context" aria-pressed="true">Level 1 · System context</button><button data-diagram="components" aria-pressed="false">Level 2 · Components</button></div>
    <div class="diagram-frame"><a id="diagram-link" href="./assets/thesis-context.svg" target="_blank" rel="noopener noreferrer" aria-label="Open original thesis diagram at full size"><img id="thesis-diagram" src="./assets/thesis-context.svg" alt="Original Level 1 thesis architecture: administrator, developer and user connect to the proposed framework, with BPMN, serverless, IAM and external systems." width="1206" height="644"></a></div>
    <p class="diagram-caption"><span id="diagram-description">Original thesis diagram · Level 1: system context.</span> Select the diagram to open it at full size.</p>
    <section class="detail-section"><h3>THE CENTRAL DESIGN DECISION</h3><p>Technology independence depends on clear contracts and appropriate connectors. Separating these responsibilities lets a process work across different applications while each system keeps its own implementation.</p></section>
    <p class="detail-note">These are the original architecture diagrams from my thesis project. The Monitoring Layer shown in Level 2 is outside the scope of the prototype. “Integrated Systems Framework” is the project name.</p>`,
  ctw: `
    <p class="eyebrow">03 / PROFESSIONAL EXPERIENCE</p>
    <h2 id="dialog-title">Critical TechWorks</h2>
    <p class="dialog-intro">A registration workflow with explicit checks and a clear progression between steps.</p>
    <div class="detail-columns"><div><h3>THE CONTEXT</h3><p>A company registration process needs to coordinate company verification and the identification of the individual involved. Each stage has its own data and progression rules.</p></div><div><h3>MY CONTRIBUTION</h3><p>Design and implementation of the new registration flow and its progression rules, as part of full-stack engineering work across backend services and frontend interfaces.</p></div></div>
    <div class="detail-flow"><span><small>01</small>Registration request</span><span><small>02</small>Company checks through SCHUFA</span><span><small>03</small>Individual identification</span><span><small>04</small>Application status</span></div>
    <section class="detail-section"><h3>ENGINEERING FOCUS</h3><p>Java, Spring Boot, Quarkus, Angular and REST APIs, with microservices and OAuth2 in the wider engineering context. My experience also includes using AI coding agents such as Claude to support development.</p></section>
    <section class="detail-section"><h3>WHAT THIS WORK TAUGHT ME</h3><p>Identity workflows are easier to reason about when the checks and transitions are explicit. Company verification and personal identification are distinct responsibilities, even when the same person takes part in both stages.</p></section>
    <p class="detail-note">High-level description of my contribution. This portfolio does not include employer source code, internal documentation or customer data.</p>`,
  paradigma: `
    <p class="eyebrow">04 / ARCHITECTURE & MOBILITY</p>
    <h2 id="dialog-title">Paradigma X STCP</h2>
    <p class="dialog-intro">Using a graph model to describe the relationships that matter in a bus management domain.</p>
    <div class="detail-columns"><div><h3>THE CONTEXT</h3><p>A solution in the context of bus management, where the relationships between domain elements are central to understanding and analysing the operation.</p></div><div><h3>MY CONTRIBUTION</h3><p>Architecture design based on a graph model, representing the domain’s elements and their connections explicitly.</p></div></div>
    <section class="detail-section"><h3>WHY A GRAPH</h3><p>When useful questions involve following relationships, the data model should make those relationships easy to express. The architecture starts with the meaning of the domain and the questions the system needs to answer.</p></section>
    <section class="detail-section"><h3>THE TAKEAWAY</h3><p>Choose a data structure because it fits the problem. Modelling relationships clearly creates a foundation for analysis without assuming a specific algorithm or treating every connection as the same kind of information.</p></section>`
};

const dialog = document.querySelector('#project-dialog');
let opener = null;
function closeProject() { dialog.close(); }
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    opener = button;
    document.querySelector('#dialog-content').innerHTML = projectDetails[button.dataset.project];
    dialog.showModal();
    document.body.classList.add('dialog-open');
    dialog.scrollTop = 0;
    document.querySelector('#close-dialog').focus();
  });
});
document.querySelector('#close-dialog').addEventListener('click', closeProject);
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  if (opener) opener.focus({preventScroll: true});
});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeProject();
});
dialog.addEventListener('click', event => {
  const button = event.target.closest('[data-diagram]');
  if (!button) return;
  const context = button.dataset.diagram === 'context';
  const image = document.querySelector('#thesis-diagram');
  image.src = context ? './assets/thesis-context.svg' : './assets/thesis-components.svg';
  image.alt = context
    ? 'Original Level 1 thesis architecture: administrator, developer and user connect to the proposed framework, with BPMN, serverless, IAM and external systems.'
    : 'Original Level 2 thesis architecture: Core Gateway, Core Backend, Process Execution Manager and Integration Layer, with BPMN, serverless, IAM and external systems. Monitoring is outside the prototype scope.';
  image.width = context ? 1206 : 1379;
  image.height = context ? 644 : 959;
  document.querySelector('#diagram-link').href = image.src;
  document.querySelector('#diagram-description').textContent = context ? 'Original thesis diagram · Level 1: system context.' : 'Original thesis diagram · Level 2: internal components.';
  document.querySelectorAll('[data-diagram]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
});
const captions = {
  operations: 'Operations: software grounded in everyday workflows.',
  integrations: 'Integrations: clear contracts between different systems.',
  intelligence: 'Intelligence: AI assistance with human review.'
};
function setFocus(name) {
  document.querySelectorAll('[data-focus]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.focus === name)));
  document.querySelectorAll('.node,.branch').forEach(node => node.classList.remove('active'));
  document.querySelector(`.node-${name}`).classList.add('active');
  document.querySelector(`.branch-${name}`).classList.add('active');
  document.querySelector('.connection-caption').textContent = captions[name];
}
document.querySelectorAll('[data-focus]').forEach(button => button.addEventListener('click', () => setFocus(button.dataset.focus)));
setFocus('operations');
document.querySelector('#year').textContent = new Date().getFullYear();
