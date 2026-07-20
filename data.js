// Demo Hub — product & video data model
//
// `youtubeId` accepts ANY of these:
//   - a bare video id ........ "M7lc1UVf-VE"
//   - a full watch URL ....... "https://www.youtube.com/watch?v=GX9x62kFsVU"
//   - a youtu.be link ........ "https://youtu.be/GX9x62kFsVU"
//   - a playlist watch URL ... "https://www.youtube.com/watch?v=ID&list=PLAYLIST_ID"
//
// UNLISTED PLAYLISTS: add a `playlistId` (the value after list= in the playlist URL).
//   - with a `youtubeId` too  -> that video opens inside the playlist
//   - with only `playlistId`  -> the whole playlist plays
// Unlisted playlists embed fine; only "Private" ones are blocked by YouTube.
// Example:  youtubeId: "GX9x62kFsVU", playlistId: "PLxxxxxxxxxxxxxxxx",
const PRODUCTS = [
  {
    id: "Low-Code-Automation",
    name: "Low Code Automation",
    tagline: "Feature demos for Low Code Automation",
    icon: "",
    iconSvg: "lca-icon.svg",
    videos: [
      { id: "aa-1", title: "1.1 Get Started | Record Your First Test on Low Code Automation", youtubeId: "https://www.youtube.com/watch?v=x0bHlVV2psU&list=PLN1KfW8k2lAk", duration: "05:11",
        description: "Start your Low Code Automation journey by recording a test directly in your browser. The intuitive test recorder turns every click, input, and navigation into an automated step in real time, with no coding or infrastructure setup, so QA testers, developers, and citizen testers can build their first automated test in minutes.",
        docs: [{ label: "Create Your First Test", url: "https://www.browserstack.com/docs/low-code-automation/get-started/create-test" }], links: [{label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta"}] },
      { id: "aa-2", title: "1.2 Get Started | Add Validations: Visual, Text Assert, Element Presence", youtubeId: "https://youtu.be/_3k8DXgi8Cs?si=jWaECArBEYmwKCyq", duration: "03:31",
        description: "Add detailed validations to your recorded steps to verify both functionality and visuals. Assert on text, elements, and page state so every critical checkpoint in your end-to-end journey is checked automatically on each run..",
        docs: [{ label: "Adding Validations", url: "https://www.browserstack.com/docs/low-code-automation/test-recording/validations" }], links: [{label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta"}] },
      { id: "aa-3", title: "1.3 Get Started | Create Test Suites & Run Cross-Browser Builds", youtubeId: "https://www.youtube.com/watch?v=8ttgxw3dpX4&list=PLN1KfW8k2lAk", duration: "02:08",
        description: "Create your test suite and replay recorded tests on real desktop and mobile browsers in the BrowserStack cloud. Run the same flow across multiple browser and OS combinations to confirm consistent behaviour everywhere, while intelligent wait timeouts automatically reduce flakiness with zero infrastructure to manage.",
        docs: [{ label: "Perform Cross Browser Testing", url: "https://www.browserstack.com/docs/low-code-automation/type-of-testing/cross-browser-testing" }], links: [{label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta"}] },
      { id: "aa-4", title: "1.4 Get Started | Debug Tests with Video, Screenshots & Logs", youtubeId: "https://www.youtube.com/watch?v=tVD4XdkpjSI&list=PLN1KfW8k2lAk&index=4", duration: "04:30",
        description: "Diagnose failures fast using rich debugging data. Step through each action with screenshots, video, and logs from the run to understand exactly what happened, and monitor the ongoing health of your tests.",
        docs: [{label:"Test Reporting and Debugging", url:"https://www.browserstack.com/docs/low-code-automation/test-debugging/overview"}], links: [{label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta"}] },
      { id: "aa-5", title: "1.5 Get Started | Test Internal & Staging Environments with BrowserStack Local", youtubeId: "https://www.youtube.com/watch?v=BDrDstNDnv0&list=PLN1KfW8k2lAk", duration: "03:55",
        description: "Test applications that aren't publicly accessible. Use BrowserStack Local to securely run low-code tests against internal, staging, UAT, and pre-production environments hosted behind your firewall or proxy.",
        docs: [{label: "Test on Internal Networks", url: "https://www.browserstack.com/docs/low-code-automation/local-testing"}], links: [{label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta"}] },
      { id: "aa-6", title: "1.6 Get Started | Run Tests in Your CI/CD Pipeline", youtubeId: "https://www.youtube.com/watch?v=8vXaAJlpV40&list=PLN1KfW8k2lAk&index=6", duration: "02:43",
        description: "Shift your low-code tests left by running them automatically in your pipeline. Trigger tests on every build or deployment and pull results back into your CI/CD workflow for continuous, fast feedback.",
        docs: [{label: "", url: ""}], links: [{label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta"}] },
      { id: "aa-7", title: "2.1 Test faster and broaden Coverage | AI-Powered Testing", youtubeId: "https://www.youtube.com/watch?v=CGXw64t2Nrk&list=PLN1KfW8k2lAk", duration: "05:42",
        description: "Use AI to turn plain natural-language instructions into ready-to-run test steps. Generate test cases and steps from a simple prompt to accelerate authoring, then fine-tune them in the recorder, lowering the learning curve even further.",
        docs: [{label: "", url: ""}], links: [{label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta"}] },
      { id: "aa-8", title: "2.2 Test faster and broaden Coverage | IP Geolocation Testing", youtubeId: "https://www.youtube.com/watch?v=spToUIJN6lY&list=PLN1KfW8k2lAk", duration: "03:21",
        description: "Verify region-specific behaviour by running tests from different geographic locations. Check localised content, pricing, language, and geo-gated features using IP-based geolocation to ensure a consistent experience for global users.",
        docs: [{label: "", url: ""}], links: [{label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta"}] },
      { id: "aa-9", title: "3.1 Reliable & Reusable Tests | Override Element Locators", youtubeId: "https://www.youtube.com/watch?v=HnkE_HGklK4&list=PLN1KfW8k2lAk", duration: "02:04",
        description: "Improve reliability by customising how your tests identify elements. Override auto-generated locators with your own selectors to pinpoint hard-to-identify or dynamic elements, working alongside AI self-heal to keep tests passing as your application changes.",
        docs: [{label: "", url: ""}], links: [{label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta"}] },
      { id: "aa-10", title: "3.2 Reliable & Reusable Tests | Reuse Steps with Modules", youtubeId: "https://www.youtube.com/watch?v=3ncZwuooNZc&list=PLN1KfW8k2lAk", duration: "03:07",
        description: "Keep large test suites maintainable by grouping repeated steps, such as login or checkout, into reusable modules. Update a flow once and have the change reflected across every test that uses it, cutting duplication and ongoing maintenance.",
        docs: [{label: "", url: ""}], links: [{label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta"}] },
      { id: "aa-11", title: "3.3 Reliable & Reusable Tests | Data-Driven Testing with Variables, Secrets & Datasets", youtubeId: "https://www.youtube.com/watch?v=-g-5h5r5_PY&list=PLN1KfW8k2lAk", duration: "03:27",
        description: "Run the same test across many data combinations using built-in Variables, Secrets, and test datasets. Parameterise inputs, securely store credentials as masked secrets, and validate your application against multiple data sets without rebuilding the test.",
        docs: [{label: "", url: ""}], links: [{label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta"}] },
      { id: "aa-12", title: "3.4 Reliable & Reusable Tests | Add Conditional Flows", youtubeId: "https://www.youtube.com/watch?v=uAJO7DYCkpo&list=PLN1KfW8k2lAk", duration: "02:50",
        description: "Make your tests handle real-world unpredictability by adding conditional logic. Branch a test based on what actually appears on screen, such as pop-ups, A/B variations, or dynamic states, so a single test adapts to multiple scenarios instead of breaking.",
        docs: [{label: "", url: ""}], links: [{label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta"}] },
      { id: "aa-13", title: "3.5 Reliable & Reusable Tests | Advanced Usecases with Custom Actions & JavaScript", youtubeId: "https://www.youtube.com/watch?v=NYob4w8V6Js&list=PLN1KfW8k2lAk", duration: "03:51",
        description: "Go beyond standard steps by adding custom actions and JavaScript snippets. Automate advanced or app-specific use cases such as custom waits, computed values, and DOM interactions, while keeping the rest of your test fully codeless.",
        docs: [{label: "", url: ""}], links: [{label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta"}] },
      { id: "aa-14", title: "4.1 Cover E2E Workflows | File Upload & Download Scenarios", youtubeId: "https://www.youtube.com/watch?v=tMB83Ag1-U8&list=PLN1KfW8k2lAk", duration: "01:47",
        description: "Test workflows that depend on files end to end. Validate uploading documents and images into your app, and downloading files such as invoices or reports, all as part of a single low-code test.",
        docs: [{label: "", url: ""}], links: [{label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta"}] },
      { id: "aa-15", title: "4.2 Cover E2E Workflows | API Validations", youtubeId: "https://www.youtube.com/watch?v=nBwgenp1_Oo&list=PLN1KfW8k2lAk", duration: "03:02",
        description: "Combine UI and API checks in one test. Add API validation steps to verify backend responses, status codes, and payloads alongside your front-end flow for fuller end-to-end coverage from a single low-code test.",
        docs: [{label: "", url: ""}], links: [{label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta"}] },
      { id: "aa-16", title: "4.3 Cover E2E Workflows | Email Verification Usecases", youtubeId: "https://www.youtube.com/watch?v=rUfJQTVhIoo&list=PLN1KfW8k2lAk", duration: "03:08",
        description: "Validate email-dependent journeys without leaving your test. Cover sign-up confirmations, OTPs, password resets, and notification emails as an integrated part of your end-to-end flow.",
        docs: [{label: "", url: ""}], links: [{label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta"}] },
      { id: "aa-17", title: "5.1 Manage & Scale | Test Version History", youtubeId: "https://www.youtube.com/watch?v=lzLjxx6lEwA&list=PLN1KfW8k2lAk", duration: "03:08",
        description: "Track how a test evolves over time. Review its full version history, compare changes between revisions, and roll back to an earlier version when needed, giving teams confidence to collaborate and iterate safely..",
        docs: [{label: "", url: ""}], links: [{label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta"}] },
      { id: "aa-18", title: "5.2 Manage & Scale | Export Low Code Tests as Automation Scripts", youtubeId: "https://www.youtube.com/watch?v=db-999ku-BY&list=PLN1KfW8k2lAk", duration: "01:32",
        description: "Bridge low-code and full-code automation. Export your recorded tests as automation scripts to give engineering a head start, reuse logic inside existing frameworks, or gradually transition critical flows into code.",
        docs: [{label: "", url: ""}], links: [{label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta"}] },
    ],
  },
  {
    id: "analytics",
    name: "Analytics Suite",
    tagline: "Insights that drive decisions",
    icon: "📊",
    videos: [
      {
        id: "an-1",
        title: "Getting Started with Analytics Suite",
        youtubeId: "",
        description:
          "A quick tour of the Analytics Suite dashboard, key metrics, and how to build your first report.",
        docs: [
          { label: "Quickstart Guide", url: "https://example.com/analytics/quickstart" },
          { label: "API Reference", url: "https://example.com/analytics/api" },
        ],
        links: [
          { label: "Community Forum", url: "https://example.com/community" },
          { label: "Release Notes", url: "https://example.com/analytics/releases" },
        ],
      },
      {
        id: "an-2",
        title: "Building Custom Dashboards",
        youtubeId: "",
        description:
          "Learn how to create, customize, and share dashboards tailored to your team's needs.",
        docs: [{ label: "Dashboard Docs", url: "https://example.com/analytics/dashboards" }],
        links: [{ label: "Template Gallery", url: "https://example.com/templates" }],
      },
    ],
  },
  {
    id: "crm",
    name: "CRM Platform",
    tagline: "Relationships, organized",
    icon: "🤝",
    videos: [
      {
        id: "crm-1",
        title: "CRM Onboarding Walkthrough",
        youtubeId: "",
        description:
          "Set up your pipeline, import contacts, and configure your sales stages in minutes.",
        docs: [{ label: "Setup Guide", url: "https://example.com/crm/setup" }],
        links: [{ label: "Integrations", url: "https://example.com/crm/integrations" }],
      },
    ],
  },
  {
    id: "automation",
    name: "Automation Engine",
    tagline: "Work that runs itself",
    icon: "⚡",
    videos: [
      {
        id: "au-1",
        title: "Creating Your First Workflow",
        youtubeId: "",
        description:
          "Automate repetitive tasks with triggers, conditions, and actions — no code required.",
        docs: [{ label: "Workflow Docs", url: "https://example.com/automation/workflows" }],
        links: [{ label: "Recipe Library", url: "https://example.com/automation/recipes" }],
      },
    ],
  },
];