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
    id: "live",
    name: "Live",
    tagline: "Interactive cross-browser testing on real devices",
    icon: "",
    iconSvg: "icons/icon-14-live.svg",
    videos: [
      {
        id: "live-1", title: "BrowserStack Live - Bookmark URLs", youtubeId: "https://youtu.be/_MiFH3lAZLQ", duration: "2:08",
        description: "Learn how to save and manage URLs for quick access during your live testing sessions.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "live-2", title: "BrowserStack Live - Bug Reporting", youtubeId: "https://youtu.be/iTaCDsgbSAs", duration: "3:08",
        description: "Discover how to capture and report bugs directly to your project management tools while testing.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "live-3", title: "BrowserStack Live - Multi Device Testing", youtubeId: "https://youtu.be/Ep0MO1MnUQc", duration: "2:21",
        description: "Learn how to test your website simultaneously or seamlessly across multiple devices and browsers.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "live-4", title: "BrowserStack Live - Accessibility Testing on Desktop Browsers", youtubeId: "https://youtu.be/Y-VjorRVWug", duration: "2:14",
        description: "Understand how to evaluate your website's accessibility features on various desktop browsers.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "live-5", title: "BrowserStack Live - Accessibility Testing on Mobile Browsers", youtubeId: "https://youtu.be/v82FAGKD55c", duration: "4:15",
        description: "Learn the steps to perform comprehensive accessibility checks on mobile browsers.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "live-6", title: "BrowserStack Live - Download Files and Images from Real Devices", youtubeId: "https://youtu.be/LAqnCkQs6qA", duration: "5:45",
        description: "See how to download and verify files or images directly from remote real devices.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "live-7", title: "BrowserStack Live - File Download", youtubeId: "https://youtu.be/4UUK4tW2KkQ", duration: "5:45",
        description: "Learn how to test and validate file download functionalities on different browsers and devices.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "live-8", title: "BrowserStack Live - Image Injection", youtubeId: "https://youtu.be/Y7NzHHraApQ", duration: "2:50",
        description: "Discover how to inject images into device cameras to test upload workflows or scanning features.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "live-9", title: "BrowserStack Live - Network Monitoring", youtubeId: "https://youtu.be/orD9FVffat4", duration: "2:02",
        description: "Understand how to monitor network traffic and analyze requests during your testing sessions.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "live-10", title: "BrowserStack Live - Network Throttling", youtubeId: "", duration: "",
        description: "Learn how to simulate different network speeds, like 3G or offline modes, to test app performance.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "live-11", title: "BrowserStack Live - QR Code and Barcode Scanning", youtubeId: "", duration: "",
        description: "See how to test QR code and barcode scanning features using real device cameras.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "live-12", title: "BrowserStack Live - Record a Session", youtubeId: "", duration: "",
        description: "Learn how to record your interactive testing sessions for easier debugging and team sharing.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "live-13", title: "BrowserStack Live - SIM for OTP/Message Testing", youtubeId: "", duration: "",
        description: "Discover how to use real SIM cards to test SMS and OTP workflows on remote devices.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "live-14", title: "BrowserStack Live - Testing Apple Pay Workflows on iOS Devices", youtubeId: "", duration: "",
        description: "Understand how to validate Apple Pay integrations and payment workflows on real iOS devices.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "live-15", title: "BrowserStack Live - Testing Audio Input", youtubeId: "", duration: "",
        description: "Learn how to test voice search, voice notes, and other audio input functionalities.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "live-16", title: "BrowserStack Live - Testing Google Pay Workflows on Android-Chrome Devices", youtubeId: "", duration: "",
        description: "See how to test Google Pay integrations and payment flows on real Android devices using Chrome.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "live-17", title: "BrowserStack Live - Test Internal Networks", youtubeId: "", duration: "",
        description: "Discover how to securely test local, staging, and internal websites using BrowserStack Local.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "live-18", title: "BrowserStack Live - Timezone Specific Testing", youtubeId: "", duration: "",
        description: "Learn how to simulate different geographical timezones to test localized date and time features.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "live-19", title: "BrowserStack Live - Upload Files", youtubeId: "", duration: "",
        description: "Understand how to test file upload functionalities from a remote device's local storage.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "live-20", title: "BrowserStack Live - Test Across Resolutions", youtubeId: "", duration: "",
        description: "See how to verify your website's responsiveness by testing across various screen resolutions.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
    ],
  },
  {
    id: "app-live",
    name: "App Live",
    tagline: "Interactive application testing on real devices",
    icon: "",
    iconSvg: "icons/icon-10.svg",
    videos: [
      {
        id: "applive-1", title: "BrowserStack App Live - App Behaviour under different Network Conditions", youtubeId: "", duration: "",
        description: "Learn how to test your mobile app's behavior and responsiveness under various network speeds and conditions.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "applive-2", title: "BrowserStack App Live - App Performance Testing", youtubeId: "", duration: "",
        description: "Discover how to profile and analyze your app's performance metrics like CPU, memory, and battery usage.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "applive-3", title: "BrowserStack App Live - Audio Injection", youtubeId: "", duration: "",
        description: "Learn how to inject audio files into the device microphone to test voice commands and audio features.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "applive-4", title: "BrowserStack App Live - Biometric Authentication", youtubeId: "", duration: "",
        description: "Understand how to simulate Face ID and Touch ID to test biometric authentication workflows in your app.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "applive-5", title: "BrowserStack App Live - Download Files", youtubeId: "", duration: "",
        description: "See how to validate file download functionalities and access downloaded files on remote real devices.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "applive-6", title: "BrowserStack App Live - GPS Geolocation based Testing", youtubeId: "", duration: "",
        description: "Learn how to mock GPS coordinates to test location-based features and services within your mobile app.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "applive-7", title: "BrowserStack App Live - Gradle Integration", youtubeId: "", duration: "",
        description: "Discover how to integrate App Live with Gradle to streamline your Android app testing workflow.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "applive-8", title: "BrowserStack App Live - Image Injection for Barcode/QR Code", youtubeId: "", duration: "",
        description: "Learn how to inject images into the device camera to test QR code and barcode scanning features.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "applive-9", title: "BrowserStack App Live - Integrate with Android Studio", youtubeId: "", duration: "",
        description: "See how to connect App Live directly with Android Studio for seamless development and testing.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "applive-10", title: "BrowserStack App Live - IP Whitelisting", youtubeId: "", duration: "",
        description: "Understand how to use static IPs to test applications securely in environments with strict IP whitelisting.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "applive-11", title: "BrowserStack App Live - Locale Based Testing", youtubeId: "", duration: "",
        description: "Learn how to change device language and region settings to test app localization and internationalization.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "applive-12", title: "BrowserStack App Live - Local Testing", youtubeId: "", duration: "",
        description: "Discover how to securely test mobile apps against your local, development, or staging environments.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "applive-13", title: "BrowserStack App Live - Multi-Device Testing", youtubeId: "", duration: "",
        description: "Learn how to test your application across multiple real mobile devices simultaneously for faster validation.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "applive-14", title: "BrowserStack App Live - SIM based OTP/Message Testing via Device", youtubeId: "", duration: "",
        description: "See how to test SMS, OTPs, and cellular network features using real devices equipped with SIM cards.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "applive-15", title: "BrowserStack App Live - Payment Workflows", youtubeId: "", duration: "",
        description: "Understand how to validate in-app purchases and payment gateway integrations on real mobile devices.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "applive-16", title: "BrowserStack App Live - IP Region Specific Geolocation Testing", youtubeId: "", duration: "",
        description: "Learn how to simulate specific IP locations to test region-restricted content and geotargeted features.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "applive-17", title: "BrowserStack App Live - Test Apps Behind a Firewall or VPN", youtubeId: "", duration: "",
        description: "Discover how to establish secure connections to test internal apps hosted behind corporate firewalls or VPNs.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "applive-18", title: "BrowserStack App Live - Test Dependent Apps", youtubeId: "", duration: "",
        description: "Learn how to install and interact with secondary or third-party apps required for your main app's workflow.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "applive-19", title: "BrowserStack App Live - Upload Files", youtubeId: "", duration: "",
        description: "See how to push files from your machine to a remote device to test media and document upload features.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "applive-20", title: "BrowserStack App Live - Video Injection", youtubeId: "", duration: "",
        description: "Learn how to inject video files into the device camera stream to test live video capture and processing.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
    ],

  },
  {
    id: "automate",
    name: "Automate",
    tagline: "Browser test automation infrastructure",
    icon: "",
    iconSvg: "icons/icon-13.svg",
    videos: [
      {
        id: "automate-1", title: "Automate - Audio Injection", youtubeId: "https://youtu.be/qSY_qwW8r8g", duration: "06:35",
        description: "Learn how to inject audio files into automated test sessions to verify voice-driven workflows and audio features.",
        docs: [{ label: "Audio Injection", url: "https://www.browserstack.com/docs/automate/selenium/test-workflow/working-with-files?fw-lang=java%2Ftestng" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "automate-2", title: "Automate - Camera Injection", youtubeId: "https://youtu.be/jpqvtjuKLBs", duration: "04:37",
        description: "Discover how to mock camera inputs with custom images to automate testing for features like barcode and QR code scanning.",
        docs: [{ label: "Camera Injection", url: "https://www.browserstack.com/docs/automate/selenium/camera-injection?fw-lang=java%2Ftestng" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "automate-3", title: "Automate - CI/CD Integration", youtubeId: "https://youtu.be/0b4d_KjwJa4", duration: "06:56",
        description: "Understand how to seamlessly integrate your automated browser tests into your existing CI/CD pipelines for continuous testing.",
        docs: [{ label: "CI/CD Integration", url: "https://www.browserstack.com/docs/automate/selenium/ci-cd-integration?fw-lang=java%2Ftestng" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "automate-4", title: "Automate - Debugging Options", youtubeId: "https://youtu.be/A77k9OBdE-A", duration: "06:07",
        description: "Explore built-in debugging tools like text logs, visual logs, and video recordings to quickly troubleshoot failing automated tests.",
        docs: [{ label: "Debugging Options", url: "https://www.browserstack.com/docs/automate/selenium/debug?fw-lang=java%2Ftestng" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "automate-5", title: "Automate - Download Files", youtubeId: "https://youtu.be/KUsFPOXyHZE", duration: "04:46",
        description: "Learn how to automate the validation of file download functionalities on remote browsers and retrieve downloaded files.",
        docs: [{ label: "Download Files", url: "https://www.browserstack.com/docs/automate/selenium/test-file-download?fw-lang=java%2Ftestng" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "automate-6", title: "Automate - Integrate with SDK", youtubeId: "https://youtu.be/pIAd495s_9I", duration: "04:36",
        description: "See how to easily configure, manage, and run your automated test suites at scale using the BrowserStack SDK.",
        docs: [{ label: "Integrate with SDK", url: "https://www.browserstack.com/docs/automate/playwright/get-started?fw-lang=nodejs" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "automate-7", title: "Automate - Network Profiling", youtubeId: "https://youtu.be/IzmoMm64RA4", duration: "06:28",
        description: "Capture and analyze network traffic during your automated tests to monitor web performance and validate API calls.",
        docs: [{ label: "Network Profiling", url: "https://www.browserstack.com/docs/automate/selenium/simulate-network-conditions?fw-lang=java%2Ftestng" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "automate-8", title: "Automate - Organise Tests", youtubeId: "https://youtu.be/iYrQuNeKtyI", duration: "06:28",
        description: "Learn best practices for naming, structuring, and organizing your automated test runs and builds using capabilities.",
        docs: [{ label: "Organise Tests", url: "https://www.browserstack.com/docs/automate/selenium/organize-tests?fw-lang=java%2Ftestng" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "automate-9", title: "Automate - Local Testing", youtubeId: "https://youtu.be/L-b71BELWUY", duration: "02:32",
        description: "Learn how to automate tests for internal, development, and staging environments using the BrowserStack Local binary.",
        docs: [{ label: "Local Testing", url: "https://www.browserstack.com/docs/automate/selenium/local-testing-introduction?fw-lang=java%2Ftestng" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "automate-10", title: "Automate - Simulate Geolocation & IP Geolocation", youtubeId: "https://youtu.be/4dxeRb4CWno", duration: "05:48",
        description: "Discover how to mock GPS coordinates in your automated tests to validate location-based services and localized content.",
        docs: [{ label: "Simulate Geolocation & IP Geolocation", url: "https://www.browserstack.com/docs/automate/selenium/simulate-geolocation?fw-lang=java%2Ftestng" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "automate-11", title: "Automate - Interative Session", youtubeId: "https://youtu.be/3WsxMggHaW8", duration: "02:13",
        description: "Learn how to utilize the interactive session feature for your automated builds to interact with them",
        docs: [{ label: "Interative Session", url: "https://www.browserstack.com/docs/automate/selenium/interactive-session?fw-lang=java%2Ftestng" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      }, 
      // {
      //   id: "automate-12", title: "Automate - Integrations", youtubeId: "", duration: "02:12",
      //   description: "Explore how to connect BrowserStack Automate with various testing frameworks, reporting dashboards, and third-party tools.",
      //   docs: [{ label: "Integrations", url: "https://www.browserstack.com/docs/automate/playwright/get-started?fw-lang=nodejs" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      // },
    ],
},
  {
    id: "app-automate",
    name: "App Automate",
    tagline: "Automated mobile app testing on real devices",
    icon: "",
    iconSvg: "icons/icon-09.svg",
    videos: [
      {
        id: "app-automate-1", title: "App Automate - Getting Started", youtubeId: "", duration: "04:54",
        description: "Learn the basics of configuring and running your first automated mobile app test on BrowserStack's real device cloud.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "app-automate-2", title: "App Automate - Appium Inspector", youtubeId: "", duration: "03:45",
        description: "Learn how to use Appium Inspector with App Automate to inspect app elements and write robust automated test scripts.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "app-automate-3", title: "App Automate - Apple Pay Workflows", youtubeId: "", duration: "03:32",
        description: "Discover how to automate the testing of Apple Pay transactions and payment workflows on real iOS devices.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "app-automate-4", title: "App Automate - Audio Injection", youtubeId: "", duration: "02:38",
        description: "Learn how to inject audio files into automated test sessions to verify voice-driven app features.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "app-automate-5", title: "App Automate - Debugging Capabilities", youtubeId: "", duration: "09:16",
        description: "Explore the comprehensive debugging tools like video recordings, text logs, and network logs available for troubleshooting tests.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "app-automate-6", title: "App Automate - Device Passwords", youtubeId: "", duration: "02:43",
        description: "Learn how to automate test cases that require interacting with device lock screens or entering device passcodes.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "app-automate-7", title: "App Automate - File Upload", youtubeId: "", duration: "02:50",
        description: "Understand how to push and upload files from your local machine to the remote device during automated test runs.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "app-automate-8", title: "App Automate - Image Injection", youtubeId: "", duration: "04:26",
        description: "Discover how to mock camera inputs with custom images to automate testing for features like barcode and QR code scanning.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "app-automate-9", title: "App Automate - Katalon Studio Integration", youtubeId: "", duration: "03:59",
        description: "See how to seamlessly integrate BrowserStack App Automate with Katalon Studio for comprehensive mobile app testing.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "app-automate-10", title: "App Automate - Local Testing", youtubeId: "", duration: "04:31",
        description: "Learn how to securely automate mobile app tests against local, development, or staging environments using BrowserStack Local.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "app-automate-11", title: "App Automate - SIM Use-Case", youtubeId: "", duration: "02:42",
        description: "Understand how to automate workflows relying on cellular networks, such as SMS or OTP verification, using real SIM-enabled devices.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "app-automate-12", title: "App Automate - Test Flutter Apps", youtubeId: "", duration: "02:33",
        description: "Discover how to write and execute automated tests specifically designed for cross-platform Flutter applications on real devices.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "app-automate-13", title: "App Automate - Testing Web Views", youtubeId: "", duration: "02:49",
        description: "Learn how to successfully automate interactions and test elements within WebViews embedded inside your native mobile applications.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "app-automate-14", title: "App Automate - Test Orchestration", youtubeId: "", duration: "02:51",
        description: "See how to optimize your test execution and manage complex automated test suites using test orchestration techniques.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "app-automate-15", title: "App Automate - Video Injection", youtubeId: "", duration: "02:48",
        description: "Learn how to inject video files into the device camera stream to automate testing for live video capture and processing features.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
    ],
  },
  {
    id: "test-management",
    name: "Test Management",
    tagline: "Next-gen Test Management with AI",
    icon: "",
    iconSvg: "icons/icon-11.svg",
    videos: [
      {
        id: "test-management-1", title: "Test Management - Test Plans", youtubeId: "https://youtu.be/mHSFJPOIBDs", duration: "02:29",
        description: "Learn how to create, organize, and execute comprehensive test plans for your quality assurance workflows.",
        docs: [{ label: "What is a Test Plan", url: "https://www.browserstack.com/docs/test-management/test-plans/what-is-test-plan" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-2", title: "Test Management - Two-Way Jira Sync", youtubeId: "https://youtu.be/lzF92oQ10GI", duration: "06:05",
        description: "Discover how to seamlessly sync bugs, requirements, and test statuses bidirectionally with Jira in real time.",
        docs: [{ label: "Jira Integration", url: "https://www.browserstack.com/docs/test-management/jira/jira-integration" }, { label: "Jira App", url: "https://www.browserstack.com/docs/test-management/jira/jira-app" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-3", title: "Test Management - API Reference", youtubeId: "https://youtu.be/ye9BnLvm1CI", duration: "03:23",
        description: "Understand how to leverage REST APIs to programmatically manage your test cases, test runs, and execution results.",
        docs: [{ label: "API Reference Introduction", url: "https://www.browserstack.com/docs/test-management/api-reference/introduction" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-4", title: "Test Management - Automated Test Runs", youtubeId: "https://youtu.be/qs6_j8KMjkM", duration: "04:38",
        description: "See how to link, execute, and track your automated test suite runs directly within the Test Management interface.",
        docs: [{ label: "Manage Automated Test Runs", url: "https://www.browserstack.com/docs/test-management/overview/automated-test-runs" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-5", title: "Test Management - Custom Form Fields", youtubeId: "https://youtu.be/At-8r1LXeHc", duration: "03:39",
        description: "See how to configure custom form fields to extend test case attributes and match your team's specific metadata requirements.",
        docs: [{ label: "Set Custom Form Fields", url: "https://www.browserstack.com/docs/test-management/advanced-features/custom-form-fields" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-6", title: "Test Management - Reports & Analysis", youtubeId: "https://youtu.be/oTdb0WhZLcM", duration: "03:25",
        description: "Understand how to analyze test coverage, pass rates, and critical quality metrics using built-in reporting tools.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-7", title: "Test Management - Real-Time Dashboards", youtubeId: "https://youtu.be/O5Jro_Osi50", duration: "01:45",
        description: "Get an overview of customizable dashboards that provide actionable insights and high-level visibility into testing progress.",
        docs: [{ label: "Configure Real Time Dashboards", url: "https://www.browserstack.com/docs/test-reporting-and-analytics/dashboards/build-dashboards" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-8", title: "Test Management - ID Tagging", youtubeId: "https://youtu.be/dX75fZw4rqs", duration: "03:32",
        description: "Learn how to use TCM ID tags in TestNG to automatically map execution results back to manual test cases.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-9", title: "Test Management - Integrate with CI/CD", youtubeId: "https://youtu.be/Ixr11C2AflU", duration: "02:27",
        description: "See how to integrate Test Management into your continuous integration and deployment pipelines for automated result tracking.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-10", title: "Test Management - AI Test Runs", youtubeId: "https://youtu.be/V97U-h-T0vU", duration: "01:06",
        description: "Discover how to leverage AI capabilities to automatically generate and execute test runs with minimal manual overhead.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-11", title: "Test Management - Xray Quick Import", youtubeId: "https://youtu.be/QQawq_UUVJA", duration: "01:39",
        description: "Learn how to quickly migrate and import your existing test repositories directly from Jira Xray.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-12", title: "Test Management - Low Code Automation", youtubeId: "https://youtu.be/TdGVZoM0Obk", duration: "02:35",
        description: "Discover how to bridge the gap between manual testing and automation using AI-driven, low-code solutions.",
        docs: [{ label: "Integrate with Low Code Automation", url: "https://www.browserstack.com/docs/test-management/browserstack-ai/low-code-authoring" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-13", title: "Test Management - Test Reporting & Analysis", youtubeId: "https://youtu.be/KoDz4T4nqSU", duration: "01:30",
        description: "See how to connect Test Management with Test Reporting & Analysis for deep insights into test failures and build performance.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-14", title: "Test Management - Manual Test Execution", youtubeId: "https://youtu.be/D4gfC1CcQ8Y", duration: "05:08",
        description: "See how testers can execute manual test runs, log step-by-step results, and track execution statuses in real time.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-15", title: "Test Management - Quick Import via CSV", youtubeId: "https://youtu.be/pYpwL4gU1O4", duration: "01:40",
        description: "Learn how to rapidly bulk-import your existing test cases from spreadsheets or CSV files.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-16", title: "Test Management - AI Test Cases", youtubeId: "https://youtu.be/WtPx_5HLatM", duration: "03:29",
        description: "Learn how to generate structured test cases instantly using AI-powered drafting features.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-17", title: "Test Management - SDK ID Tagging", youtubeId: "https://youtu.be/QlEaTcbQhX0", duration: "02:53",
        description: "See how to use the BrowserStack SDK to tag test cases and automatically map automated results to Test Management.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-18", title: "Test Management - Requirements Traceability Reporting", youtubeId: "https://youtu.be/XthuwXbVRfY", duration: "03:42",
        description: "Learn how to map test cases to requirements and epics to ensure full test coverage and end-to-end traceability.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-19", title: "Test Management - Zephyr Scale Quick Import", youtubeId: "https://youtu.be/hVjXOW70E50", duration: "01:54",
        description: "Learn how to seamlessly import your existing test assets and suites from Zephyr Scale into Test Management.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-20", title: "Test Management - Test Cases Overview", youtubeId: "https://youtu.be/Sm8UO7pwkmc", duration: "03:10",
        description: "Learn how to create, view, and organize test cases efficiently within structured folders for streamlined test suites.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-21", title: "Test Management - TestRail Quick Import", youtubeId: "https://youtu.be/wSgxOaJVJCM", duration: "02:19",
        description: "Discover how to easily migrate your complete test case database and history from TestRail into Test Management.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-22", title: "Test Management - Custom Result Fields", youtubeId: "https://youtu.be/NyhgAHyMtY0", duration: "05:00",
        description: "Learn how to define custom result fields to capture specialized execution status details tailored to your team's process.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "test-management-23", title: "Test Management - Test Case Workflows", youtubeId: "https://youtu.be/mvki90tAY08", duration: "08:40",
        description: "Discover best practices for bulk-editing, organizing, and managing the entire lifecycle of your test case repository.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
    ],
  },
  {
    id: "accessibility",
    name: "Accessibility Testing",
    tagline: "Test WCAG and ADA Compliance",
    icon: "",
    iconSvg: "icons/icon-06.svg",
    videos: [
      {
        id: "accessibility-1", title: "Accessibility - Local Testing", youtubeId: "", duration: "03:20",
        description: "Learn how to test internal or locally hosted websites for WCAG compliance using BrowserStack Local.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "accessibility-2", title: "Accessibility - Organise Test Runs", youtubeId: "", duration: "03:00",
        description: "Discover how to structure, tag, and efficiently manage your accessibility test runs for better organization.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "accessibility-3", title: "Accessibility - Reports", youtubeId: "", duration: "08:06",
        description: "Understand how to interpret comprehensive accessibility reports and identify critical WCAG violations.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "accessibility-4", title: "Accessibility - Run Accessibility Tests", youtubeId: "", duration: "03:28",
        description: "See how to execute automated and manual accessibility scans on your web applications to find issues fast.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "accessibility-5", title: "Accessibility - Screen Reader", youtubeId: "", duration: "06:04",
        description: "Learn how to use built-in screen readers on real devices to test compatibility with assistive technologies.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "accessibility-6", title: "Accessibility - Share Reports", youtubeId: "", duration: "03:05",
        description: "Discover how to easily export and share detailed accessibility violation reports with your development team.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "accessibility-7", title: "Accessibility - Test Functional Workflows", youtubeId: "", duration: "03:57",
        description: "Learn how to perform accessibility testing on complex user journeys, dynamic content, and multi-step workflows.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "accessibility-8", title: "Accessibility - Test Functional Components", youtubeId: "", duration: "05:08",
        description: "Understand how to evaluate specific functional components like modals, forms, and navigation menus for accessibility.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "accessibility-9", title: "Accessibility - Website Scanner Overview", youtubeId: "", duration: "04:10",
        description: "Get an overview of how to use the Website Scanner to crawl multiple pages and find accessibility issues at scale.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "accessibility-10", title: "Accessibility - Website Scanner Configuration", youtubeId: "", duration: "04:09",
        description: "Learn how to configure and customize the Website Scanner to target specific domains, URLs, or authenticated pages.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "accessibility-11", title: "Compare Builds on Accessibility", youtubeId: "", duration: "02:30",
        description: "See how to track your website's accessibility health over time by comparing violation trends across different builds.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      }
    ],
  },
  {
    id: "app-accessibility",
    name: "App Accessibility Testing",
    tagline: "Test WCAG and ADA Compliance for Native Apps on Real Devices",
    icon: "",
    iconSvg: "icons/icon-06.svg",
    videos: [
      {
        id: "appaccessibility-1", title: "App Accessibility - Integrations", youtubeId: "", duration: "03:54",
        description: "Learn how to integrate App Accessibility testing seamlessly into your existing CI/CD pipelines and tools.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "appaccessibility-2", title: "App Accessibility - Introduction", youtubeId: "", duration: "02:17",
        description: "Get a comprehensive overview of how to test and ensure WCAG compliance for your native mobile applications.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "appaccessibility-3", title: "App Accessibility - iOS Accessibility Scanner", youtubeId: "", duration: "02:31",
        description: "Discover how to utilize the iOS Accessibility Scanner to identify and resolve compliance issues on Apple devices.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "appaccessibility-4", title: "App Accessibility - IP Geolocation", youtubeId: "", duration: "03:02",
        description: "Learn how to simulate different geographic regions via IP geolocation to test localized accessibility features.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "appaccessibility-5", title: "App Accessibility - Perform Scans", youtubeId: "", duration: "03:17",
        description: "Understand how to execute automated accessibility scans on your native mobile apps to quickly find violations.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "appaccessibility-6", title: "App Accessibility - Talkback on Android", youtubeId: "", duration: "03:04",
        description: "Learn how to evaluate your Android app's compatibility with the native TalkBack screen reader on real devices.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "appaccessibility-7", title: "App Accessibility - Test Apps from Local Machine", youtubeId: "", duration: "03:00",
        description: "See how to directly upload and test native mobile applications from your local development environment.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "appaccessibility-8", title: "App Accessibility - Test Behind Firewalls", youtubeId: "", duration: "03:31",
        description: "Discover how to securely test internal, development, or staging mobile applications hosted behind corporate firewalls.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "appaccessibility-9", title: "App Accessibility - Test Localization", youtubeId: "", duration: "03:02",
        description: "Learn how to configure device language and region settings to ensure accessibility features work correctly worldwide.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "appaccessibility-10", title: "App Accessibility - VoiceOver on iOS", youtubeId: "", duration: "03:24",
        description: "Understand how to test and navigate your iOS application using the native VoiceOver screen reader.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "appaccessibility-11", title: "Reporting using BrowserStack App Accessibility", youtubeId: "", duration: "02:57",
        description: "Learn how to generate, analyze, and share detailed accessibility violation reports with your development team.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      }
    ],
  },
  {
    id: "Low-Code-Automation",
    name: "Low Code Automation",
    tagline: "Feature demos for Low Code Automation",
    icon: "",
    iconSvg: "icons/icon-04-lca.svg",
    videos: [
      {
        id: "lc-1", title: "1.1 Get Started | Record Your First Test on Low Code Automation", youtubeId: "https://www.youtube.com/watch?v=x0bHlVV2psU&list=PLN1KfW8k2lAk", duration: "05:11",
        description: "Start your Low Code Automation journey by recording a test directly in your browser. The intuitive test recorder turns every click, input, and navigation into an automated step in real time, with no coding or infrastructure setup, so QA testers, developers, and citizen testers can build their first automated test in minutes.",
        docs: [{ label: "Create Your First Test", url: "https://www.browserstack.com/docs/low-code-automation/get-started/create-test" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "lc-2", title: "1.2 Get Started | Add Validations: Visual, Text Assert, Element Presence", youtubeId: "https://youtu.be/_3k8DXgi8Cs?si=jWaECArBEYmwKCyq", duration: "03:31",
        description: "Add detailed validations to your recorded steps to verify both functionality and visuals. Assert on text, elements, and page state so every critical checkpoint in your end-to-end journey is checked automatically on each run.",
        docs: [{ label: "Adding Validations", url: "https://www.browserstack.com/docs/low-code-automation/test-recording/validations" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "lc-3", title: "1.3 Get Started | Create Test Suites & Run Cross-Browser Builds", youtubeId: "https://www.youtube.com/watch?v=8ttgxw3dpX4&list=PLN1KfW8k2lAk", duration: "02:08",
        description: "Create your test suite and replay recorded tests on real desktop and mobile browsers in the BrowserStack cloud. Run the same flow across multiple browser and OS combinations to confirm consistent behaviour everywhere, while intelligent wait timeouts automatically reduce flakiness with zero infrastructure to manage.",
        docs: [{ label: "Perform Cross Browser Testing", url: "https://www.browserstack.com/docs/low-code-automation/type-of-testing/cross-browser-testing" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "lc-4", title: "1.4 Get Started | Debug Tests with Video, Screenshots & Logs", youtubeId: "https://www.youtube.com/watch?v=tVD4XdkpjSI&list=PLN1KfW8k2lAk", duration: "04:30",
        description: "Diagnose failures fast using rich debugging data. Step through each action with screenshots, video, and logs from the run to understand exactly what happened, and monitor the ongoing health of your tests.",
        docs: [{ label: "Test Reporting and Debugging", url: "https://www.browserstack.com/docs/low-code-automation/test-debugging/overview" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "lc-5", title: "1.5 Get Started | Test Internal & Staging Environments with BrowserStack Local", youtubeId: "https://www.youtube.com/watch?v=BDrDstNDnv0&list=PLN1KfW8k2lAk", duration: "03:55",
        description: "Test applications that aren't publicly accessible. Use BrowserStack Local to securely run low-code tests against internal, staging, UAT, and pre-production environments hosted behind your firewall or proxy.",
        docs: [{ label: "Test on Internal Networks", url: "https://www.browserstack.com/docs/low-code-automation/local-testing" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "lc-6", title: "1.6 Get Started | Run Tests in Your CI/CD Pipeline", youtubeId: "https://www.youtube.com/watch?v=8vXaAJlpV40&list=PLN1KfW8k2lAk", duration: "02:43",
        description: "Shift your low-code tests left by running them automatically in your pipeline. Trigger tests on every build or deployment and pull results back into your CI/CD workflow for continuous, fast feedback.",
        docs: [{ label: "Integrate with CI/CD Pipelines", url: "https://www.browserstack.com/docs/low-code-automation/cicd-integrations/rest-api" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "lc-7", title: "2.1 Test faster and broaden Coverage | AI-Powered Testing", youtubeId: "https://www.youtube.com/watch?v=CGXw64t2Nrk&list=PLN1KfW8k2lAk", duration: "05:42",
        description: "Use AI to turn plain natural-language instructions into ready-to-run test steps. Generate test cases and steps from a simple prompt to accelerate authoring, then fine-tune them in the recorder, lowering the learning curve even further.",
        docs: [{ label: "AI Powered Testing", url: "https://www.browserstack.com/docs/low-code-automation/test-recording/browserstack-ai" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "lc-8", title: "2.2 Test faster and broaden Coverage | IP Geolocation Testing", youtubeId: "https://www.youtube.com/watch?v=spToUIJN6lY&list=PLN1KfW8k2lAk", duration: "03:21",
        description: "Verify region-specific behaviour by running tests from different geographic locations. Check localised content, pricing, language, and geo-gated features using IP-based geolocation to ensure a consistent experience for global users.",
        docs: [{ label: "IP Geolocation", url: "https://www.browserstack.com/docs/low-code-automation/test-real-user-conditions/ip-geo-location" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "lc-9", title: "3.1 Reliable & Reusable Tests | Override Element Locators", youtubeId: "https://www.youtube.com/watch?v=HnkE_HGklK4&list=PLN1KfW8k2lAk", duration: "02:04",
        description: "Improve reliability by customising how your tests identify elements. Override auto-generated locators with your own selectors to pinpoint hard-to-identify or dynamic elements, working alongside AI self-heal to keep tests passing as your application changes.",
        docs: [{ label: "Configure Test Steps", url: "https://www.browserstack.com/docs/low-code-automation/test-recording/configure-step-behaviour" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "lc-10", title: "3.2 Reliable & Reusable Tests | Reuse Steps with Modules", youtubeId: "https://www.youtube.com/watch?v=3ncZwuooNZc&list=PLN1KfW8k2lAk", duration: "03:07",
        description: "Keep large test suites maintainable by grouping repeated steps, such as login or checkout, into reusable modules. Update a flow once and have the change reflected across every test that uses it, cutting duplication and ongoing maintenance.",
        docs: [{ label: "Create Modules", url: "https://www.browserstack.com/docs/low-code-automation/best-practices/modules" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "lc-11", title: "3.3 Reliable & Reusable Tests | Data-Driven Testing with Variables, Secrets & Datasets", youtubeId: "https://www.youtube.com/watch?v=-g-5h5r5_PY&list=PLN1KfW8k2lAk", duration: "03:27",
        description: "Run the same test across many data combinations using built-in Variables, Secrets, and test datasets. Parameterise inputs, securely store credentials as masked secrets, and validate your application against multiple data sets without rebuilding the test.",
        docs: [{ label: "Add Variables, Secrets and Datasets", url: "https://www.browserstack.com/docs/low-code-automation/best-practices/data-driven-testing" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "lc-12", title: "3.4 Reliable & Reusable Tests | Add Conditional Flows", youtubeId: "https://www.youtube.com/watch?v=uAJO7DYCkpo&list=PLN1KfW8k2lAk", duration: "02:50",
        description: "Make your tests handle real-world unpredictability by adding conditional logic. Branch a test based on what actually appears on screen, such as pop-ups, A/B variations, or dynamic states, so a single test adapts to multiple scenarios instead of breaking.",
        docs: [{ label: "Conditional If-Else Workflows", url: "https://www.browserstack.com/docs/low-code-automation/test-recording/conditional-flow" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "lc-13", title: "3.5 Reliable & Reusable Tests | Advanced Usecases with Custom Actions & JavaScript", youtubeId: "https://www.youtube.com/watch?v=NYob4w8V6Js&list=PLN1KfW8k2lAk", duration: "03:51",
        description: "Go beyond standard steps by adding custom actions and JavaScript snippets. Automate advanced or app-specific use cases such as custom waits, computed values, and DOM interactions, while keeping the rest of your test fully codeless.",
        docs: [{ label: "Custom Actions with Javascript", url: "https://www.browserstack.com/docs/low-code-automation/test-recording/custom-actions" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "lc-14", title: "4.1 Cover E2E Workflows | File Upload & Download Scenarios", youtubeId: "https://www.youtube.com/watch?v=tMB83Ag1-U8&list=PLN1KfW8k2lAk", duration: "01:47",
        description: "Test workflows that depend on files end to end. Validate uploading documents and images into your app, and downloading files such as invoices or reports, all as part of a single low-code test.",
        docs: [{ label: "File Validation", url: "https://www.browserstack.com/docs/low-code-automation/test-recording/validate-file-download" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "lc-15", title: "4.2 Cover E2E Workflows | API Validations", youtubeId: "https://www.youtube.com/watch?v=nBwgenp1_Oo&list=PLN1KfW8k2lAk", duration: "03:02",
        description: "Combine UI and API checks in one test. Add API validation steps to verify backend responses, status codes, and payloads alongside your front-end flow for fuller end-to-end coverage from a single low-code test.",
        docs: [{ label: "API Validations", url: "https://www.browserstack.com/docs/low-code-automation/test-recording/configure-api" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "lc-16", title: "4.3 Cover E2E Workflows | Email Verification Usecases", youtubeId: "https://www.youtube.com/watch?v=rUfJQTVhIoo&list=PLN1KfW8k2lAk", duration: "03:08",
        description: "Validate email-dependent journeys without leaving your test. Cover sign-up confirmations, OTPs, password resets, and notification emails as an integrated part of your end-to-end flow.",
        docs: [{ label: "Test Email Workflows", url: "https://www.browserstack.com/docs/low-code-automation/test-recording/test-email-workflows" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "lc-17", title: "5.1 Manage & Scale | Test Version History", youtubeId: "https://www.youtube.com/watch?v=lzLjxx6lEwA&list=PLN1KfW8k2lAk", duration: "03:08",
        description: "Track how a test evolves over time. Review its full version history, compare changes between revisions, and roll back to an earlier version when needed, giving teams confidence to collaborate and iterate safely..",
        docs: [{ label: "Test Version History", url: "https://www.browserstack.com/docs/low-code-automation/managing-tests/test-versioning" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "lc-18", title: "5.2 Manage & Scale | Export Low Code Tests as Automation Scripts", youtubeId: "https://www.youtube.com/watch?v=db-999ku-BY&list=PLN1KfW8k2lAk", duration: "01:32",
        description: "Bridge low-code and full-code automation. Export your recorded tests as automation scripts to give engineering a head start, reuse logic inside existing frameworks, or gradually transition critical flows into code.",
        docs: [{ label: "Export Test Cases using API", url: "https://www.browserstack.com/docs/low-code-automation/advanced-use-cases/export-tests" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
    ],
  },

  {
    id: "test-reporting-and-analytics",
    name: "Test Reporting and Analytics",
    tagline: "Unified reporting & analytics for your test automation",
    icon: "",
    iconSvg: "icons/icon-08.svg",
    videos: [
      {
        id: "tra-1", title: "Test Reporting & Analytics - Collaboration", youtubeId: "https://youtu.be/LsHGtMIRo38", duration: "02:20",
        description: "Learn how to collaborate effectively with your team by sharing insights and test reports using Test Reporting and Analytics.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "tra-2", title: "Test Reporting & Analytics - JUNIT Upload", youtubeId: "https://youtu.be/xdJbw5ZmSSY", duration: "02:12",
        description: "Discover how to easily upload JUnit XML reports to centralized dashboards for deeper analysis and reporting.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "tra-3", title: "Test Reporting & Analytics - Quality Gates", youtubeId: "https://youtu.be/rn7Nuk0JpfE", duration: "04:56",
        description: "Understand how to configure strict quality gates to automatically block releases that don't meet your testing standards.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "tra-4", title: "Test Reporting & Analytics - CI/CD Integration", youtubeId: "https://youtu.be/uTnHqPZ2YAU", duration: "01:50",
        description: "See how to seamlessly integrate Test Reporting & Analytics into your existing CI/CD pipelines for continuous reporting.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "tra-5", title: "Test Reporting & Analytics - Custom Dashboards", youtubeId: "https://youtu.be/b3lG6PxGmE4", duration: "02:41",
        description: "Learn how to build and customize dashboards to monitor the exact metrics and KPIs that matter most to your team.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "tra-6", title: "Test Reporting & Analytics - Failure Analysis", youtubeId: "https://youtu.be/yEfPETIk8lo", duration: "01:41",
        description: "Discover how to utilize AI-driven failure analysis to quickly pinpoint the root cause of broken automated tests.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "tra-7", title: "Test Reporting & Analytics - Smart Tags", youtubeId: "https://youtu.be/B9Dqn7tJdU4", duration: "01:22",
        description: "Learn how to use smart tags to efficiently categorize, filter, and organize your vast automated test runs.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "tra-8", title: "Test Reporting & Analytics - Testing Trends", youtubeId: "https://youtu.be/B0Xxe_nHF8Q", duration: "03:13",
        description: "Understand how to track historical testing trends over time to evaluate the health and stability of your automation suite.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "tra-9", title: "Test Reporting & Analytics - Unique Errors", youtubeId: "https://youtu.be/PDSQDqqlZXE", duration: "02:23",
        description: "See how Test Reporting & Analytics automatically groups identical failures into unique errors to help prioritize bug fixes.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "tra-10", title: "Test Reporting & Analysis - BrowserStack SDK", youtubeId: "https://youtu.be/qtNJXG3rOn8", duration: "03:35",
        description: "Get a quick walkthrough on integrating and configuring the BrowserStack SDK to instantly capture logs, execution data, and rich test observability metrics.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "tra-11", title: "Test Reporting & Analytics - Webhooks", youtubeId: "https://youtu.be/bxyYQOyFLbo", duration: "03:22",
        description: "Learn how to set up and configure webhooks to receive real-time notifications for critical test execution events.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "tra-12", title: "Test Reporting & Analytics - Alerts", youtubeId: "https://youtu.be/vbIwg7cjz2k", duration: "04:33",
        description: "Discover how to configure custom alerts to stay informed about test failures, flaky behavior, and performance drops.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "tra-13", title: "Test Reporting & Analysis - Testing Health", youtubeId: "https://youtu.be/zg8w0sh1SSk", duration: "04:05",
        description: "Learn how to monitor your overall testing health and evaluate key build stability indicators to ensure consistent software delivery quality.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "tra-14", title: "Test Reporting & Analysis - Monitoring", youtubeId: "https://youtu.be/E3iF6M3IYDY", duration: "02:55",
        description: "Discover how to effectively monitor your test suites by analyzing build runs, tracking test health, visualizing long-term trends, and setting up automated alerts for actionable insights.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "tra-15", title: "Test Reporting & Analysis - Debugging Test Suites", youtubeId: "https://youtu.be/WpkIBtQBTl4", duration: "09:38",
        description: "Learn how to quickly identify, troubleshoot, and resolve failing test suites using detailed logs, execution timelines, and diagnostic insights.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      }
    ],
  },

  {
    id: "percy",
    name: "Percy",
    tagline: "AI powered Visual Testing for Websites",
    icon: "",
    iconSvg: "icons/icon-12.svg",
    videos: [
      {
        id: "percy-1", title: "Percy - Introduction and Integration", youtubeId: "https://youtu.be/P6RpPXLUql0", duration: "02:37",
        description: "Get a high-level overview of Percy's visual testing workflow and the initial steps to integrate it into your project.",
        docs: [{ label: "Percy Introduction", url: "https://www.browserstack.com/docs/percy" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "percy-2", title: "Percy - API References", youtubeId: "https://youtu.be/D2J6v3KlGi8", duration: "03:01",
        description: "Understand how to leverage Percy's APIs to programmatically manage builds, trigger snapshot comparisons, and fetch test results.",
        docs: [{ label: "Percy API References", url: "https://www.browserstack.com/docs/percy/api-reference/percy-apis" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "percy-3", title: "Percy - Baseline Management", youtubeId: "https://youtu.be/asmae_efD6I", duration: "02:45",
        description: "Discover how to efficiently manage your baseline snapshots and approve intended visual changes across builds.",
        docs: [{ label: "Baseline Management", url: "https://www.browserstack.com/docs/percy/visual-testing-workflows/baseline-management/overview" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "percy-4", title: "Percy - Branch Filtering", youtubeId: "https://youtu.be/PbBacEO7iMg", duration: "02:51",
        description: "Learn how to configure branch filtering rules using wildcards to control exactly when and where Percy runs visual tests across branches.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "percy-6", title: "Percy - Diff Highlighter", youtubeId: "https://youtu.be/3SR7rJ8tqS0", duration: "01:53",
        description: "Understand how to use the visual diff highlighter to quickly and easily spot pixel-by-pixel changes and layout shifts.",
        docs: [{ label: "Diff Highlighter", url: "https://www.browserstack.com/docs/percy/visual-testing-workflows/view-percy-build-results/diff-highlighter" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "percy-7", title: "Percy - Diff Sensitivity", youtubeId: "https://youtu.be/KXqHCw6rf4U", duration: "02:32",
        description: "Learn how to adjust visual diff sensitivity settings to reduce noise from minor rendering variations across test runs.",
        docs: [{ label: "Set Diff Sensitivity", url: "https://www.browserstack.com/docs/percy/project-settings/diff-sensitivity" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "percy-8", title: "Percy - Full Page Screenshot", youtubeId: "https://youtu.be/vszm4WvbFjA", duration: "02:05",
        description: "Discover how Percy captures complete, full-page DOM snapshots to ensure thorough visual coverage across long web pages.",
        docs: [{ label: "Enable Full Page Screenshots", url: "https://www.browserstack.com/docs/percy/advanced-snapshots/full-page-screenshot" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "percy-10", title: "Percy - Group Snapshots by Test Case Name", youtubeId: "https://youtu.be/-2VNCjmzTI8", duration: "03:50",
        description: "Learn how to group related snapshots using test case names or tags for better organization and a more streamlined visual review process.",
        docs: [{ label: "Group Snapshots", url: "https://www.browserstack.com/docs/percy/visual-testing-workflows/view-percy-build-results/group-snapshot-by-test-case-name" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "percy-11", title: "Percy - Ignore Regions using Percy CSS", youtubeId: "https://youtu.be/YK41POkjZZs", duration: "03:24",
        description: "Understand how to dynamically ignore specific DOM elements, like dynamic data or animations, using custom Percy CSS rules.",
        docs: [{ label: "Ignore Regions using CSS", url: "https://www.browserstack.com/docs/percy/set-regions/overview" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "percy-12", title: "Percy - Integrate with Figma", youtubeId: "https://youtu.be/yqDg6o9XT64", duration: "05:13",
        description: "Discover how to connect Percy with Figma to compare coded UI implementations directly against original design files.",
        docs: [{ label: "Percy-Figma Integration", url: "https://www.browserstack.com/docs/percy/visual-testing-workflows/figma/configuration" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "percy-14", title: "Percy - Layout Testing", youtubeId: "https://youtu.be/Mx6UJ41BBKc", duration: "02:46",
        description: "Learn how to test responsive web layouts to ensure consistent visual rendering across different screen sizes and viewports.",
        docs: [{ label: "Enable Layout Testing", url: "https://www.browserstack.com/docs/percy/visual-testing-workflows/view-percy-build-results/layout-testing" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "percy-15", title: "Percy - Set Regions", youtubeId: "https://youtu.be/MCL9lEnQlXc", duration: "06:00",
        description: "See how to define specific interaction regions or crop areas within your snapshots for highly targeted visual validation.",
        docs: [{ label: "Set Regions", url: "https://www.browserstack.com/docs/percy/set-regions/overview" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "percy-16", title: "Percy - Stabilize Screenshots", youtubeId: "https://youtu.be/-EiVrJLNfG4", duration: "04:05",
        description: "Discover techniques to handle flaky visual tests by stabilizing dynamic web fonts, CSS animations, and volatile DOM elements.",
        docs: [{ label: "Screenshot Stabilization Techniques", url: "https://www.browserstack.com/docs/percy/stabilize-screenshots/overview" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "percy-17", title: "Percy - Synchronous Comparison", youtubeId: "https://youtu.be/GcB4qM0Vytg", duration: "02:51",
        description: "Learn how to run synchronous visual comparisons to get immediate, real-time feedback directly within your test execution workflow.",
        docs: [{ label: "Parallel Comparisons", url: "https://www.browserstack.com/docs/percy/advanced/sync-comparison-results" }], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
    ],

  },
  {
    id: "app-percy",
    name: "App Percy",
    tagline: "AI powered Visual Testing for Native Applications",
    icon: "",
    iconSvg: "icons/icon-12.svg",
    videos: [
      {
        id: "apppercy-1", title: "App Percy - API Integration", youtubeId: "", duration: "04:29",
        description: "Learn how to use APIs to seamlessly integrate and manage App Percy visual testing within your custom workflows.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "apppercy-2", title: "App Percy - Base Build Selection", youtubeId: "", duration: "12:46",
        description: "Understand the logic behind how App Percy selects base builds for visual comparisons and how to configure it for your team.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "apppercy-3", title: "App Percy - Baseline Management", youtubeId: "", duration: "06:28",
        description: "Discover best practices and strategies to efficiently manage, update, and approve visual baselines for your mobile apps.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "apppercy-4", title: "App Percy - Boost Performance", youtubeId: "", duration: "02:30",
        description: "Learn actionable tips and techniques to optimize configuration and speed up the execution of your visual test suites.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "apppercy-5", title: "App Percy - Bring Your Own Screenshots", youtubeId: "", duration: "01:50",
        description: "See how to upload and visually test screenshots captured directly from your own custom device infrastructure.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "apppercy-6", title: "App Percy - CI/CD Integration", youtubeId: "", duration: "03:44",
        description: "Seamlessly incorporate App Percy into your CI/CD pipelines to automatically catch visual bugs on every code commit.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "apppercy-7", title: "App Percy - Feature to Stabilize Tests", youtubeId: "", duration: "02:44",
        description: "Learn how to use built-in stabilization features to reduce flakiness and eliminate false positives in your visual tests.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "apppercy-8", title: "App Percy - Group Snapshots", youtubeId: "", duration: "03:46",
        description: "Discover how to intelligently group related application snapshots together to streamline your team's visual review process.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "apppercy-9", title: "App Percy - Partial Build Management", youtubeId: "", duration: "02:12",
        description: "Learn how to handle and review partial builds effectively when only specific components of your app are updated.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "apppercy-10", title: "App Percy - Run on your own Devices", youtubeId: "", duration: "03:58",
        description: "Understand how to execute App Percy visual tests leveraging your locally hosted or in-house physical mobile devices.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "apppercy-11", title: "App Percy - Baseline Management for Visual Testing", youtubeId: "", duration: "04:01",
        description: "Get an in-depth walkthrough on managing and maintaining robust baselines specifically tailored for mobile app visual testing.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "apppercy-12", title: "BrowserStack AppPercy Integration", youtubeId: "", duration: "03:18",
        description: "Learn how to natively integrate App Percy visual testing directly into your existing BrowserStack App Automate test scripts.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "apppercy-13", title: "Cherry Picking Baseline - App Percy", youtubeId: "", duration: "02:07",
        description: "Discover how to selectively cherry-pick specific approved snapshots to update your baseline builds without running a full suite.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "apppercy-14", title: "Diff Highlighter - App Percy", youtubeId: "", duration: "01:23",
        description: "See how the visual diff highlighter effortlessly points out pixel-level changes and rendering differences in your mobile app UI.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "apppercy-15", title: "FullPage Screenshots in BrowserStack App Percy", youtubeId: "", duration: "01:51",
        description: "Learn how to capture and test full-length, scrollable page screenshots within your native mobile applications.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "apppercy-16", title: "Github Integration with BrowserStack App Percy", youtubeId: "", duration: "02:48",
        description: "Integrate App Percy with GitHub to automatically post visual review statuses and build insights directly on your pull requests.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "apppercy-17", title: "Ignoring Dynamic Elements in App Percy", youtubeId: "", duration: "02:12",
        description: "See how to automatically or manually ignore dynamic content like timestamps, shifting data, or ads to prevent false failures.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
      {
        id: "apppercy-18", title: "Ignoring regions in BrowserStack App Percy", youtubeId: "", duration: "01:43",
        description: "Learn how to explicitly draw ignore regions to exclude specific UI areas from visual comparisons during test runs.",
        docs: [], links: [{ label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
    ],
  },


  {
    id: "test-companion",
    name: "Test Companion",
    tagline: "Agentic AI for test automation",
    icon: "",
    iconSvg: "icons/icon-22.svg",
    videos: [
      {
        id: "testcompanion-1", title: "Introducing Test Companion", youtubeId: "https://www.youtube.com/watch?v=ZckJuvKn2iE", duration: "06:11",
        description: "Test Companion helps SDETs author, execute, debug, and maintain tests 4X faster with agentic AI right inside the IDE they already use. Works with any automation framework to test mobile and web applications.",
        docs: [{ label: "Test Companion Docs", url: "https://www.browserstack.com/docs/test-companion/overview" }], links: [{ label: "Download the extention here", url: "https://www.browserstack.com/docs/test-companion/get-started/installation-guide" }, { label: "Contact BrowserStack Support", url: "https://www.browserstack.com/contact?ref=helpdesk-bottom-contact-us-cta" }]
      },
    ],
  },


];