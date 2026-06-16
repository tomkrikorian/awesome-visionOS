# Awesome visionOS [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

Brought to you by <a href="https://www.studiomeije.com"><img src="images/studio-meije-logo.svg" alt="Studio Meije" height="32"></a>

A curated list of resources for developers building visionOS apps, spatial interfaces, RealityKit and ARKit experiences, immersive media, and Apple Vision Pro tooling.

## Contents

- [Official](#official)
  - [Documentation](#documentation)
  - [WWDC](#wwdc)
  - [Apple Samples](#apple-samples)
- [Open Source](#open-source)
  - [Libraries](#libraries)
  - [Tools](#tools)
  - [Projects](#projects)
- [Learning](#learning)
  - [Communities](#communities)
  - [Websites](#websites)
  - [Newsletters](#newsletters)
  - [Courses](#courses)
  - [Articles](#articles)
- [Related Lists](#related-lists)
- [Contributing](#contributing)

## Official

### Documentation

- [visionOS Developer Documentation](https://developer.apple.com/documentation/visionos) — Official starting point for visionOS APIs, guides, and sample code.
- [Human Interface Guidelines for visionOS](https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos) — Design guidance for spatial interfaces, windows, volumes, and immersive spaces.
- [RealityKit Documentation](https://developer.apple.com/documentation/realitykit) — Framework reference for rendering, animation, physics, audio, and Reality Composer Pro content.
- [ARKit in visionOS](https://developer.apple.com/documentation/arkit/arkit_in_visionos) — Apple guidance for plane detection, hand tracking, room tracking, and world sensing on visionOS.

### WWDC

#### 2023

- [Get started with building apps for spatial computing](https://developer.apple.com/videos/play/wwdc2023/10260/) — Introduces the core visionOS app model and spatial computing concepts.
- [Meet Safari for spatial computing](https://developer.apple.com/videos/play/wwdc2023/10279/) — Explains how Safari adapts web experiences for Apple Vision Pro.
- [Develop your first immersive app](https://developer.apple.com/videos/play/wwdc2023/10203/) — Walks through building an immersive app with SwiftUI and RealityKit.
- [Meet SwiftUI for spatial computing](https://developer.apple.com/videos/play/wwdc2023/10109/) — Covers SwiftUI patterns for windows, volumes, and spatial layouts.
- [Build great games for spatial computing](https://developer.apple.com/videos/play/wwdc2023/10096/) — Covers design and technical foundations for spatial games.
- [Design for spatial user interfaces](https://developer.apple.com/videos/play/wwdc2023/10076/) — Explains interaction and layout principles for spatial UI.
- [Design for spatial input](https://developer.apple.com/videos/play/wwdc2023/10073/) — Covers gaze, gesture, and controller input patterns.
- [Principles of spatial design](https://developer.apple.com/videos/play/wwdc2023/10072/) — Defines foundational design principles for Apple Vision Pro experiences.
- [Meet UIKit for spatial computing](https://developer.apple.com/videos/play/wwdc2023/111215/) — Shows how UIKit apps adapt to visionOS.
- [Build spatial SharePlay experiences](https://developer.apple.com/videos/play/wwdc2023/10087/) — Explains shared spatial sessions with GroupActivities.
- [Discover Quick Look for spatial computing](https://developer.apple.com/videos/play/wwdc2023/10085/) — Covers spatial Quick Look for 3D assets and previews.
- [Enhance your spatial computing app with RealityKit](https://developer.apple.com/videos/play/wwdc2023/10081/) — Shows how RealityKit powers spatial rendering and interaction.
- [Evolve your ARKit app for spatial experiences](https://developer.apple.com/videos/play/wwdc2023/10091/) — Explains how to adapt ARKit apps for visionOS.
- [Explore materials in Reality Composer Pro](https://developer.apple.com/videos/play/wwdc2023/10202/) — Introduces material authoring workflows in Reality Composer Pro.
- [Explore rendering for spatial computing](https://developer.apple.com/videos/play/wwdc2023/10095/) — Covers rendering concepts for spatial apps and games.
- [Meet ARKit for spatial computing](https://developer.apple.com/videos/play/wwdc2023/10082/) — Introduces ARKit capabilities available on visionOS.
- [Take SwiftUI to the next dimension](https://developer.apple.com/videos/play/wwdc2023/10113/) — Demonstrates how SwiftUI composes 2D and 3D content.
- [Work with Reality Composer Pro content in Xcode](https://developer.apple.com/videos/play/wwdc2023/10273/) — Shows how to load and manage Reality Composer Pro assets in Xcode.
- [Explore enhancements to RoomPlan](https://developer.apple.com/videos/play/wwdc2023/10192/) — Covers RoomPlan updates relevant to spatial workflows.
- [Meet Object Capture for iOS](https://developer.apple.com/videos/play/wwdc2023/10191/) — Introduces Object Capture workflows for creating 3D assets.

#### 2024

- [Build compelling spatial photo and video experiences](https://developer.apple.com/videos/play/wwdc2024-10166) — Covers spatial photo and video playback patterns for visionOS.
- [Compose interactive 3D content in Reality Composer Pro](https://developer.apple.com/videos/play/wwdc2024-10102) — Shows how to build interactive scenes in Reality Composer Pro.
- [Create enhanced spatial computing experiences with ARKit](https://developer.apple.com/videos/play/wwdc2024-10100) — Explains new ARKit capabilities for spatial apps.
- [Design great visionOS apps](https://developer.apple.com/videos/play/wwdc2024-10086) — Gives current design guidance for polished visionOS apps.
- [Discover RealityKit APIs for iOS, macOS and visionOS](https://developer.apple.com/videos/play/wwdc2024-10103) — Covers cross-platform RealityKit API improvements.
- [Enhance your spatial computing app with RealityKit audio](https://developer.apple.com/videos/play/wwdc2024-111801) — Shows how to use RealityKit audio in spatial experiences.
- [Explore multiview video playback in visionOS](https://developer.apple.com/videos/play/wwdc2024-10116) — Explains multiview video playback for Apple Vision Pro.
- [Explore object tracking for visionOS](https://developer.apple.com/videos/play/wwdc2024-10101) — Covers object tracking workflows using ARKit.
- [Introducing enterprise APIs for visionOS](https://developer.apple.com/videos/play/wwdc2024-10139) — Introduces enterprise-only APIs for specialized visionOS apps.
- [What's new in SwiftUI](https://developer.apple.com/videos/play/wwdc2024-10144) — Summarizes SwiftUI updates relevant to Apple platforms.
- [Build a spatial drawing app with RealityKit](https://developer.apple.com/videos/play/wwdc2024-10104) — Demonstrates dynamic meshes and drawing interactions in RealityKit.
- [Create custom environments for your immersive apps in visionOS](https://developer.apple.com/videos/play/wwdc2024-10087) — Explains custom environment authoring for immersive spaces.
- [Dive deep into volumes and immersive spaces](https://developer.apple.com/videos/play/wwdc2024-10153) — Covers advanced structure for volumes and immersive spaces.
- [Enhance the immersion of media viewing in custom environments](https://developer.apple.com/videos/play/wwdc2024-10115) — Shows custom environments for media viewing apps.
- [Explore game input in visionOS](https://developer.apple.com/videos/play/wwdc2024-10094) — Covers hand, controller, and game input patterns.
- [Meet TabletopKit for visionOS](https://developer.apple.com/videos/play/wwdc2024-10091) — Introduces TabletopKit for spatial board and tabletop games.
- [Optimize for the spatial web](https://developer.apple.com/videos/play/wwdc2024-10065) — Covers web performance and design for spatial browsing.
- [Render Metal with passthrough in visionOS](https://developer.apple.com/videos/play/wwdc2024-10092) — Explains Metal rendering with passthrough in immersive apps.
- [Work with windows in SwiftUI](https://developer.apple.com/videos/play/wwdc2024-10149) — Covers window management and layout in SwiftUI.
- [Break into the RealityKit debugger](https://developer.apple.com/videos/play/wwdc2024-10172) — Introduces RealityKit debugging workflows in Xcode.
- [Bring your iOS or iPadOS game to visionOS](https://developer.apple.com/videos/play/wwdc2024-10093) — Shows how to adapt existing games for visionOS.
- [Build immersive web experiences with WebXR](https://developer.apple.com/videos/play/wwdc2024-10066) — Covers WebXR support for immersive web experiences.
- [Create custom hover effects in visionOS](https://developer.apple.com/videos/play/wwdc2024-10152) — Explains hover feedback for spatial input.
- [Design interactive experiences for visionOS](https://developer.apple.com/videos/play/wwdc2024-10096) — Covers interaction design for spatial apps.
- [Discover area mode for Object Capture](https://developer.apple.com/videos/play/wwdc2024-10107) — Explains Object Capture area mode for larger captures.
- [Get started with HealthKit in visionOS](https://developer.apple.com/videos/play/wwdc2024-10083) — Shows how HealthKit data can appear in visionOS apps.
- [Optimize your 3D assets for spatial computing](https://developer.apple.com/videos/play/wwdc2024-10186) — Covers asset optimization for performance and quality.
- [Customize spatial Persona templates in SharePlay](https://developer.apple.com/videos/play/wwdc2024-10201) — Covers Persona layout templates for SharePlay experiences.
- [What's new in Quick Look for visionOS](https://developer.apple.com/videos/play/wwdc2024-10105) — Summarizes Quick Look improvements for visionOS.

#### 2025

- [What's new in RealityKit](https://developer.apple.com/videos/play/wwdc2025/287) — Summarizes RealityKit updates for modern spatial apps.
- [Bring your SceneKit project to RealityKit](https://developer.apple.com/videos/play/wwdc2025/288/) — Shows how to migrate SceneKit rendering, assets, animation, audio, and effects to RealityKit.
- [Explore spatial accessory input on visionOS](https://developer.apple.com/videos/play/wwdc2025/289) — Covers accessory tracking and input workflows on visionOS.
- [What's new in Metal rendering for immersive apps](https://developer.apple.com/videos/play/wwdc2025/294) — Explains Metal rendering updates for immersive experiences.
- [Support immersive video playback in visionOS apps](https://developer.apple.com/videos/play/wwdc2025/296) — Shows how to implement immersive video playback.
- [Explore video experiences for visionOS](https://developer.apple.com/videos/play/wwdc2025/304) — Covers video presentation patterns for visionOS.
- [Optimize your custom environments for visionOS](https://developer.apple.com/videos/play/wwdc2025/305) — Gives performance guidance for custom immersive environments.
- [What's new in visionOS 26](https://developer.apple.com/videos/play/wwdc2025/317) — Summarizes platform updates in visionOS 26.
- [Share visionOS experiences with nearby people](https://developer.apple.com/videos/play/wwdc2025/318) — Covers local shared experiences on Apple Vision Pro.
- [Learn about Apple Immersive Video technologies](https://developer.apple.com/videos/play/wwdc2025/403) — Explains the technology stack behind Apple Immersive Video.
- [Better together: SwiftUI and RealityKit](https://developer.apple.com/videos/play/wwdc2025/274/) — Shows how SwiftUI and RealityKit cooperate in spatial apps.
- [Meet SwiftUI spatial layout](https://developer.apple.com/videos/play/wwdc2025/273/) — Introduces SwiftUI spatial layout APIs and patterns.
- [What's new in widgets](https://developer.apple.com/videos/play/wwdc2025/278/) — Covers WidgetKit updates across Apple platforms.
- [Design widgets for visionOS](https://developer.apple.com/videos/play/wwdc2025/255/) — Explains how to design spatial widgets for visionOS.
- [Set the scene with SwiftUI in visionOS](https://developer.apple.com/videos/play/wwdc2025/290/) — Covers SwiftUI scene structure for visionOS apps.
- [Bring Swift Charts to the third dimension](https://developer.apple.com/videos/play/wwdc2025/313/) — Shows how charts can become spatial data visualizations.
- [What's new for the spatial web](https://developer.apple.com/videos/play/wwdc2025/237/) — Summarizes web platform updates for spatial browsing.
- [Design hover interactions for visionOS](https://developer.apple.com/videos/play/wwdc2025/303/) — Covers hover states and feedback for spatial interfaces.
- [Explore enhancements to your spatial business app](https://developer.apple.com/videos/play/wwdc2025/223/) — Covers platform features for enterprise and business workflows.
- [Learn about the Apple Projected Media Profile](https://developer.apple.com/videos/play/wwdc2025/297/) — Explains APMP for immersive media delivery.

#### 2026

- [Build next-generation experiences with visionOS 27](https://developer.apple.com/videos/play/wwdc2026/287/) — Summarizes new visionOS 27 pathways for apps, games, immersive media, streaming, engines, and object tracking.
- [Explore advances in RealityKit](https://developer.apple.com/videos/play/wwdc2026/279/) — Covers RealityKit updates including cloth simulation, navigation meshes, mixed-reality lighting, reverb meshes, shadows, character rendering, and Gaussian splatting.
- [Collaborate on structured 3D models in visionOS](https://developer.apple.com/videos/play/wwdc2026/284/) — Shows USDZ preparation, hierarchical model manipulation, cross-sectional inspection, and exploded-view animations for design review.
- [Explore enhancements to visionOS object tracking](https://developer.apple.com/videos/play/wwdc2026/283/) — Covers object tracking, moving and handheld objects, spatial accessory input, and custom accessory requirements.
- [Use foveated streaming to bring immersive content to visionOS](https://developer.apple.com/videos/play/wwdc2026/286/) — Explains wireless foveated streaming for remotely rendered immersive content on Apple Vision Pro.
- [Build live production tools for Apple Immersive Video](https://developer.apple.com/videos/play/wwdc2026/338/) — Covers real-time Apple Immersive Video production over IP with immersive media, spatial audio, and scene metadata.
- [Discover the Spatial Preview framework](https://developer.apple.com/videos/play/wwdc2026/282/) — Shows how Mac apps can live-sync 2D and 3D content into visionOS with Spatial Preview.
- [Discover USDKit and what's new in OpenUSD](https://developer.apple.com/videos/play/wwdc2026/285/) — Covers USDKit, Spatial Preview APIs, spatial web updates, OpenUSD accessibility, Gaussian splats, and compressed geometry.
- [Supercharge your spatial workflows with Reality Composer Pro 3](https://developer.apple.com/videos/play/wwdc2026/393/) — Demonstrates graph-based tools for materials, animations, particles, scripting, sequencing, and behavior trees in Reality Composer Pro 3.
- [Extend Reality Composer Pro 3 functionality with Xcode](https://developer.apple.com/videos/play/wwdc2026/281/) — Shows how to create project-specific Reality Composer Pro plugins, custom components, systems, and ScriptGraph nodes.
- [Iterate your spatial scenes faster with Reality Composer Pro 3](https://developer.apple.com/videos/play/wwdc2026/280/) — Covers faster scene iteration with content authoring, visual effects, lighting, interactivity, and AI-assisted editor workflows.
- [Design no-code games with Reality Composer Pro 3](https://developer.apple.com/videos/play/wwdc2026/252/) — Shows how ScriptGraph can build no-code 3D interactions, animations, and SwiftUI-backed UI moments for apps and games.
- [Design immersive environments for visionOS apps and the spatial web](https://developer.apple.com/videos/play/wwdc2026/234/) — Covers design principles and production workflows for photoreal immersive environments in apps, websites, and SharePlay.
- [Explore immersive website environments in visionOS](https://developer.apple.com/videos/play/wwdc2026/320/) — Shows how the immersive web API can transition inline model content into virtual environments on Apple Vision Pro.
- [Get started with the HTML Model Element](https://developer.apple.com/videos/play/wwdc2026/215/) — Introduces interactive 3D content on the web with the HTML model element across Apple platforms including visionOS.

### Apple Samples

#### 2023 and 2024

- [Hello World](https://developer.apple.com/documentation/visionos/world) — Demonstrates windows, volumes, and immersive spaces in one starter app.
- [Destination Video](https://developer.apple.com/documentation/visionos/destination-video) — Shows 3D video and Spatial Audio playback for media apps.
- [Happy Beam](https://developer.apple.com/documentation/visionos/happybeam) — Builds a SharePlay game using ARKit in a full space.
- [Diorama](https://developer.apple.com/documentation/visionos/diorama) — Demonstrates scene design with Reality Composer Pro.
- [Swift Splash](https://developer.apple.com/documentation/visionos/swift-splash) — Uses RealityKit to create an interactive spatial ride.
- [Incorporating real-world surroundings in an immersive experience](https://developer.apple.com/documentation/visionos/incorporating-real-world-surroundings-in-an-immersive-experience) — Shows how immersive content can respond to room geometry.
- [Placing content on detected planes](https://developer.apple.com/documentation/visionos/placing-content-on-detected-planes) — Demonstrates placement on horizontal and vertical surfaces.
- [Tracking specific points in world space](https://developer.apple.com/documentation/visionos/tracking-points-in-world-space) — Shows how to store and retrieve world anchor positions.
- [Converting side-by-side 3D video to multiview HEVC and spatial video](https://developer.apple.com/documentation/AVFoundation/converting-side-by-side-3d-video-to-multiview-hevc-and-spatial-video) — Converts stereoscopic video sources into multiview HEVC and spatial video.
- [Construct an immersive environment for visionOS](https://developer.apple.com/documentation/realitykit/construct-an-immersive-environment-for-visionos) — Builds efficient custom environments for immersive spaces.
- [Transforming RealityKit entities using gestures](https://developer.apple.com/documentation/realitykit/transforming-realitykit-entities-with-gestures) — Adds translation, rotation, and scale gestures to RealityKit entities.
- [Simulating physics with collisions in your visionOS app](https://developer.apple.com/documentation/realitykit/simulating-physics-with-collisions-in-your-visionos-app) — Demonstrates RealityKit collisions and physics simulation.
- [Simulating particles in your visionOS app](https://developer.apple.com/documentation/realitykit/simulating-particles-in-your-visionos-app) — Shows how to attach particle emitters to spatial content.
- [BOT-anist](https://developer.apple.com/documentation/visionos/BOT-anist) — Builds a multiplatform app with windows, volumes, and animation.
- [Building an immersive media viewing experience](https://developer.apple.com/documentation/visionos/building-an-immersive-media-viewing-experience) — Combines RealityKit and Reality Composer Pro for immersive media viewing.
- [Enabling video reflections in an immersive environment](https://developer.apple.com/documentation/visionos/enabling-video-reflections-in-an-immersive-environment) — Adds video reflections inside an immersive environment.
- [Exploring object tracking with ARKit](https://developer.apple.com/documentation/visionos/exploring_object_tracking_with_arkit) — Tracks known real-world objects with ARKit.
- [Composing interactive 3D content with RealityKit and Reality Composer Pro](https://developer.apple.com/documentation/realitykit/composing-interactive-3d-content-with-realitykit-and-reality-composer-pro) — Builds interactive scenes using RealityKit timelines and authored content.
- [Presenting an artist's scene](https://developer.apple.com/documentation/realitykit/presenting-an-artists-scene) — Displays authored Reality Composer Pro scenes in a visionOS app.
- [Creating a spatial drawing app with RealityKit](https://developer.apple.com/documentation/realitykit/creating-a-spatial-drawing-app-with-realitykit) — Uses low-level mesh and texture APIs for interactive drawing.
- [Combining 2D and 3D views in an immersive app](https://developer.apple.com/documentation/realitykit/combining-2d-and-3d-views-in-an-immersive-app) — Attaches SwiftUI content to 3D RealityKit entities.
- [Creating a Spaceship game](https://developer.apple.com/documentation/realitykit/creating-a-spaceship-game) — Builds an immersive game with RealityKit systems.
- [Rendering a windowed game in stereo](https://developer.apple.com/documentation/realitykit/rendering-a-windowed-game-in-stereo) — Adapts a windowed game for stereoscopic rendering.
- [Building local experiences with room tracking](https://developer.apple.com/documentation/visionOS/building-local-experiences-with-room-tracking) — Uses room tracking to align virtual content with a real space.
- [Visualizing HealthKit State of Mind in visionOS](https://developer.apple.com/documentation/HealthKit/visualizing-healthkit-state-of-mind-in-visionos) — Presents HealthKit mental wellbeing data in a spatial interface.
- [Customizing spatial Persona templates](https://developer.apple.com/documentation/groupactivities/customizing-spatial-persona-templates) — Arranges spatial Personas for SharePlay experiences.
- [Creating a data visualization dashboard with Swift Charts](https://developer.apple.com/documentation/charts/creating-a-data-visualization-dashboard-with-swift-charts) — Builds a spatial dashboard with Swift Charts.
- [Enhancing your app's content with tab navigation](https://developer.apple.com/documentation/swiftui/enhancing-your-app-content-with-tab-navigation) — Shows tab navigation patterns for SwiftUI apps.
- [Creating tabletop games](https://developer.apple.com/documentation/TabletopKit/creating-tabletop-games) — Demonstrates spatial board game mechanics with TabletopKit.
- [Creating 2D shapes with SwiftUI](https://developer.apple.com/documentation/visionOS/creating-2d-shapes-in-visionos-with-swiftui) — Draws 2D shapes with SwiftUI in visionOS.
- [Creating 3D entities with RealityKit](https://developer.apple.com/documentation/visionOS/creating-3d-entities-with-realitykit) — Displays 3D shapes using predefined RealityKit meshes.
- [Creating SwiftUI windows in visionOS](https://developer.apple.com/documentation/visionos/creating-a-new-swiftui-window-in-visionos) — Manages multiple windows in a SwiftUI visionOS app.
- [Creating 3D models as movable windows](https://developer.apple.com/documentation/visionos/creating-a-volumetric-window-in-visionos) — Presents 3D content inside a volumetric window.
- [Creating an immersive space in visionOS](https://developer.apple.com/documentation/visionOS/creating-immersive-spaces-in-visionos-with-swiftui) — Opens an immersive space with SwiftUI and RealityKit.
- [Displaying a 3D environment through a portal](https://developer.apple.com/documentation/visionos/displaying-a-3d-environment-through-a-portal) — Uses portal rendering to reveal an authored 3D environment.
- [Displaying an entity that follows a person's view](https://developer.apple.com/documentation/visionOS/displaying-a-3D-object-that-moves-to-stay-in-a-person's-view) — Positions RealityKit content relative to the viewer's head movement.
- [Displaying a stereoscopic image](https://developer.apple.com/documentation/visionOS/displaying-a-stereoscopic-image-in-visionos) — Presents stereoscopic image content in a visionOS app.
- [Displaying text in visionOS](https://developer.apple.com/documentation/visionOS/displaying-text-in-visionOS) — Shows text styling and presentation patterns for visionOS.
- [Adding a depth effect to text in visionOS](https://developer.apple.com/documentation/visionOS/adding-a-depth-effect-to-text-in-visionOS) — Adds dimensional text effects in a visionOS scene.
- [Creating an interactive 3D model in visionOS](https://developer.apple.com/documentation/visionOS/creating-an-interactable-3d-model-in-visionos) — Adds interaction to a 3D model in a visionOS app.
- [Creating a 3D painting space](https://developer.apple.com/documentation/visionOS/creating-a-painting-space-in-visionos) — Implements a painting canvas entity and updates its mesh for strokes.
- [Generating procedural textures](https://developer.apple.com/documentation/visionOS/generating-procedural-textures-in-visionos) — Generates textures for RealityKit content at runtime.
- [Implementing adjustable material](https://developer.apple.com/documentation/visionOS/implementing-adjustable-material-in-visionos) — Demonstrates configurable materials for visionOS content.
- [Playing spatial audio](https://developer.apple.com/documentation/visionOS/playing-spatial-audio-in-visionos) — Demonstrates spatial audio playback in visionOS.
- [Tracking and visualizing hand movement](https://developer.apple.com/documentation/visionOS/tracking-and-visualizing-hand-movement) — Visualizes hand tracking data in a visionOS app.
- [Applying mesh to real-world surroundings](https://developer.apple.com/documentation/visionOS/applying-mesh-to-real-world-surroundings) — Applies generated mesh content to detected surroundings.
- [Obscuring virtual items in a scene behind real-world items](https://developer.apple.com/documentation/visionOS/obscuring-virtual-items-in-a-scene-behind-real-world-items) — Uses real-world occlusion to blend virtual content with surroundings.
- [Placing entities using head and device transform](https://developer.apple.com/documentation/visionOS/placing-entities-using-head-and-device-transform) — Places RealityKit entities using viewer and device transforms.
- [Object tracking with Reality Composer Pro experiences](https://developer.apple.com/documentation/visionOS/object-tracking-with-reality-composer-pro-experiences) — Attaches authored Reality Composer Pro content to tracked objects.
- [Implementing SharePlay for immersive spaces in visionOS](https://developer.apple.com/documentation/visionOS/implementing-shareplay-for-immersive-spaces-in-visionos) — Synchronizes immersive-space content across a SharePlay session.
- [Building a guessing game for visionOS](https://developer.apple.com/documentation/groupactivities/building-a-guessing-game-for-visionos) — Creates a team-based SharePlay game using spatial Persona placement.
- [Creating a multiview video playback experience in visionOS](https://developer.apple.com/documentation/avkit/creating-a-multiview-video-playback-experience-in-visionos) — Builds a multiview video interface for visionOS.

#### 2025

- [Canyon Crosser: Building a volumetric hike-planning app](https://developer.apple.com/documentation/visionOS/canyon-crosser-building-a-volumetric-hike-planning-app) — Builds a volumetric planning app with maps and terrain.
- [Connecting iPadOS and visionOS apps over the local network](https://developer.apple.com/documentation/visionOS/connecting-ipados-and-visionos-apps-over-the-local-network) — Builds an iPadOS companion app that controls a visionOS experience.
- [Playing immersive media with RealityKit](https://developer.apple.com/documentation/visionos/playing-immersive-media-with-realitykit) — Shows immersive media playback using RealityKit.
- [Playing immersive media with AVKit](https://developer.apple.com/documentation/AVKit/playing-immersive-media-with-avkit) — Uses AVKit to play immersive media on visionOS.
- [Authoring Apple Immersive Video](https://developer.apple.com/documentation/ImmersiveMediaSupport/authoring-apple-immersive-video) — Shows how to author Apple Immersive Video with Immersive Media Support.
- [Petite Asteroids: Building a volumetric visionOS game](https://developer.apple.com/documentation/visionOS/petite-asteroids-building-a-volumetric-visionos-game) — Builds a volumetric arcade game for visionOS.
- [Synchronizing group gameplay with TabletopKit](https://developer.apple.com/documentation/TabletopKit/synchronizing-group-gameplay-with-tabletopkit) — Synchronizes multiplayer tabletop gameplay.
- [Tracking accessories in volumetric windows](https://developer.apple.com/documentation/ARKit/tracking-accessories-in-volumetric-windows) — Tracks accessories inside volumetric window experiences.
- [Tracking a handheld accessory as a virtual sculpting tool](https://developer.apple.com/documentation/arkit/tracking-a-handheld-accessory-as-a-virtual-sculpting-tool) — Turns tracked accessories into virtual tools.
- [Rendering hover effects in Metal immersive apps](https://developer.apple.com/documentation/compositorservices/rendering_hover_effects_in_metal_immersive_apps) — Demonstrates hover rendering in Metal immersive apps.
- [Presenting images in RealityKit](https://developer.apple.com/documentation/realitykit/presenting-images-in-realitykit) — Presents images as RealityKit content.
- [Accessing the main camera](https://developer.apple.com/documentation/visionos/accessing-the-main-camera) — Uses enterprise camera access APIs on visionOS.
- [Displaying video from connected devices](https://developer.apple.com/documentation/visionOS/displaying-video-from-connected-devices) — Shows video from devices connected with the Developer Strap.
- [Locating and decoding barcodes in 3D space](https://developer.apple.com/documentation/visionOS/locating-and-decoding-barcodes-in-3d-space) — Detects and decodes barcodes in the user's surroundings.
- [Creating a foveated streaming client on visionOS](https://developer.apple.com/documentation/FoveatedStreaming/creating-a-foveated-streaming-client-on-visionos) — Streams high-fidelity immersive content using Foveated Streaming.
- [Drawing in the air and on surfaces with a spatial stylus](https://developer.apple.com/documentation/visionOS/drawing-in-the-air-and-on-surfaces-with-a-spatial-stylus) — Builds a spatial stylus drawing experience for in-air and on-surface input.
- [Manipulating entities with solid collisions](https://developer.apple.com/documentation/visionOS/manipulating-entities-with-solid-collisions) — Maintains solid collision behavior while manipulating RealityKit entities.
- [Bringing your SceneKit projects to RealityKit](https://developer.apple.com/documentation/realitykit/bringing-your-scenekit-projects-to-realitykit) — Migrates SceneKit concepts and assets to RealityKit.
- [Loading entities with ShaderGraph materials](https://developer.apple.com/documentation/realitycomposerpro/loading-entities-with-shadergraph-materials) — Loads Reality Composer Pro entities with ShaderGraph materials.
- [Rendering stereoscopic video with RealityKit](https://developer.apple.com/documentation/realitykit/rendering-stereoscopic-video-with-realitykit) — Renders stereoscopic video with RealityKit.
- [Animating hand models in visionOS](https://developer.apple.com/documentation/visionos/animating-hand-models-in-visionos) — Animates virtual hand models from tracked hand data.
- [Integrating virtual objects with your environment](https://developer.apple.com/documentation/realitykit/integrating-virtual-objects-with-your-environment) — Blends virtual objects with real-world surroundings.

#### WWDC26

- [Manipulating models with RealityKit](https://developer.apple.com/documentation/RealityKit/manipulating-models-with-realitykit) — Interacts with detailed 3D models using manipulation and clipping controls on visionOS 27.
- [Mixing spatial music](https://developer.apple.com/documentation/RealityKit/mixing-spatial-music) — Previews ray-traced reverb by adjusting a spatialized multitrack audio mix in an immersive scene on visionOS 27.
- [Enriching your text in text views](https://developer.apple.com/documentation/UIKit/enriching-your-text-in-text-views) — Demonstrates TextKit improvements for line numbers, section collapsing, inline attachments, exclusion paths, and text lists with visionOS 27 support.
- [Processing Apple Immersive Video with foveation](https://developer.apple.com/documentation/ImmersiveMediaSupport/processing-apple-immersive-video-with-foveation) — Applies foveation to Apple Immersive Video content for visionOS 27 immersive-media workflows.
- [Working with content from your Mac app using Spatial Preview](https://developer.apple.com/documentation/SpatialPreview/working-with-content-from-your-mac-app-using-spatial-preview) — Sends documents and 3D content live from a Mac app to Apple Vision Pro with the Spatial Preview framework.

## Open Source

### Libraries

#### UI & Spatial UX

- [RealityUI](https://github.com/maxxfrazer/RealityUI) — Provides reusable 3D UI controls and gestures for RealityKit with visionOS support.
- [SwiftUIX](https://github.com/SwiftUIX/SwiftUIX) — Adds SwiftUI components and utilities for Apple platforms with visionOS support.
- [Glur](https://github.com/joogps/Glur) — Adds efficient progressive blur effects to SwiftUI views.
- [SwiftUI Shimmer](https://github.com/markiv/SwiftUI-Shimmer) — Adds lightweight shimmer animations to SwiftUI views.
- [CodeEditorView](https://github.com/mchakravarty/CodeEditorView) — Provides a SwiftUI code editor view for Apple platforms.
- [DSWaveformImage](https://github.com/dmrschmidt/DSWaveformImage) — Draws audio waveforms with native Swift and SwiftUI interfaces.
- [EmojiKit](https://github.com/Kankoda/EmojiKit) — Provides emoji utilities for Swift apps on Apple platforms.
- [Vortex](https://github.com/twostraws/Vortex) — Creates high-performance particle effects in SwiftUI.
- [Orb](https://github.com/metasidd/Orb) — Demonstrates an animated orb built entirely in SwiftUI.
- [ScenesManager](https://github.com/Tab-To-Tap/ScenesManager) — Manages windows and immersive spaces in visionOS apps.
- [MeshingKit](https://github.com/rryam/MeshingKit) — Adds mesh gradients to SwiftUI apps across Apple platforms.
- [CompactSlider](https://github.com/buh/CompactSlider) — Provides a compact SwiftUI slider control for Apple platforms.

#### Input & Gestures

- [HandGesture](https://github.com/johnhaney/HandGesture) — Provides a semantic gesture API for visionOS hand tracking.
- [VisionGesture](https://github.com/AlohaYos/VisionGesture) — Offers a gesture playground with simulator-friendly fake hand tracking.
- [HandVector](https://github.com/XanderXu/HandVector) — Calculates hand gesture similarity using cosine similarity.

#### RealityKit & ARKit

- [RealityGeometries](https://github.com/maxxfrazer/RealityGeometries) — Adds reusable geometry primitives for RealityKit projects.
- [GoncharKit](https://github.com/gonchar/GoncharKit) — Provides helper functions for RealityKit development on visionOS.
- [PlanePlopper](https://github.com/daniloc/PlanePlopper) — Simplifies persistent immersive object placement.
- [RealityBounds](https://github.com/IvanMathy/RealityBounds) — Visualizes bounding boxes for RealityKit entities on visionOS.
- [FindSurface](https://github.com/CurvSurf/FindSurface-visionOS) — Extracts geometric surfaces from point cloud data on visionOS.

#### Metal & Graphics

- [MetalSplatter](https://github.com/scier/MetalSplatter) — Renders Gaussian splats on Apple platforms including visionOS.
- [ShaderGraphCoder](https://github.com/praeclarum/ShaderGraphCoder) — Generates RealityKit Shader Graph materials from Swift code.
- [swifty-creatives](https://github.com/yukiny0811/swifty-creatives) — Provides a Metal-based creative coding framework inspired by Processing.

#### Media & Immersive Video

- [openimmersivelib](https://github.com/acuteimmersive/openimmersivelib) — Provides a reusable immersive and spatial video playback package.
- [KSPlayer](https://github.com/kingslay/KSPlayer) — Plays video with AVPlayer and FFmpeg across Apple platforms.
- [HaishinKit.swift](https://github.com/shogo4405/HaishinKit.swift) — Streams camera and microphone media over RTMP and SRT.
- [YouTubePlayerKit](https://github.com/SvenTiigi/YouTubePlayerKit) — Embeds YouTube playback in Swift apps across Apple platforms.
- [I/O](https://github.com/comdigis-community/IO) - A multiplatform spatial audio engine written in Swift.

#### Build & Tooling

- [AppState](https://github.com/0xLeif/AppState) — Adds state management and dependency injection utilities for Swift 6 apps.
- [MockingKit](https://github.com/danielsaidi/MockingKit) — Helps mock protocols and classes in Swift tests.

#### Cross-platform

- [NativeScript](https://github.com/NativeScript/NativeScript) — Provides a JavaScript and TypeScript runtime with visionOS support.
- [react-native-visionos](https://github.com/callstack/react-native-visionos) — Enables React Native apps to target visionOS.
- [react-native-bottom-tabs](https://github.com/callstackincubator/react-native-bottom-tabs) — Adds native bottom tabs with visionOS support for React Native apps.
- [Mapbox](https://docs.mapbox.com/ios/maps/api/11.2.0-beta.1/documentation/mapboxmaps/work-with-visionos/) — Shows how to use the Mapbox Maps SDK in visionOS apps.
- [RevenueCat Purchases](https://github.com/RevenueCat/purchases-ios) — Handles in-app purchases and subscriptions across Apple platforms.
- [Flare](https://github.com/space-code/flare) — Provides a Swift package for in-app purchases and subscriptions.
- [Firebase](https://github.com/firebase/firebase-ios-sdk) — Provides Firebase SDKs for Apple app development.
- [OAuthKit](https://github.com/codefiesta/OAuthKit) — Adds OAuth 2.0 authentication helpers for Swift apps.
- [MLX](https://github.com/ml-explore/mlx-swift) — Provides Swift APIs for Apple's MLX array framework.
- [WhisperKit](https://github.com/argmaxinc/WhisperKit) — Provides on-device speech recognition for Apple silicon.
- [GPTalks](https://github.com/SilverMarcs/GPTalks) — Demonstrates a multiplatform ChatGPT API client written in SwiftUI.

### Tools

#### Debugging

- [reality-check](https://github.com/ml-opensource/reality-check) — Previews and debugs RealityKit AR projects from a macOS app.
- [SceneVisualizer](https://github.com/agg23/SceneVisualizer) — Visualizes LiDAR information received by Apple Vision Pro.

#### Asset Pipeline

- [Spatial](https://blog.mikeswanson.com/spatial/) — Processes MV-HEVC video files and spatial photos from a macOS CLI.
- [Spatial-Metadata](https://github.com/Kartaverse/Spatial-Metadata) — Prepares immersive media metadata for Apple Vision Pro and Meta Quest.
- [visionOS App Icon Web Previewer](https://gnikoloff.github.io/visionos-web-app-icon-maker/) — Previews and exports layered app icons for visionOS.
- [HoudiniMeshSync](https://github.com/xjorma/HoudiniMeshSync) — Syncs meshes between Houdini and Apple Vision Pro workflows.
- [RCPMaterials](https://github.com/JamieScanlon/RCPMaterials?tab=readme-ov-file) — Collects dynamic Reality Composer Pro materials for reuse.

#### CI / Build

- [ios-cmake](https://github.com/leetal/ios-cmake) — Provides a CMake toolchain with native visionOS support.
- [CopilotForXcode](https://github.com/intitni/CopilotForXcode) — Adds AI code completion and chat assistance to Xcode.
- [Alex Sidebar](https://alexcodes.app) — Integrates an AI assistant sidebar into Xcode workflows.

### Projects

#### Apps

- [PersonaChess](https://github.com/FlipByBlink/PersonaChess) — Implements a chess game with SharePlay support.
- [HandsRuler](https://github.com/FlipByBlink/HandsRuler) — Measures distances using hand tracking on Apple Vision Pro.
- [ALVR](https://github.com/alvr-org/alvr-visionos) — Provides an experimental visionOS client for ALVR and SteamVR streaming.
- [AugmenosCode](https://github.com/augmenos/AugmenosCode) — Showcases visionOS capabilities through an educational open-source app.
- [openimmersive](https://github.com/acuteimmersive/openimmersive) — Plays open immersive video content on Apple Vision Pro.
- [pISSStream](https://github.com/Jaennaet/pISSStream?tab=readme-ov-file#visionos) — Visualizes International Space Station waste-tank telemetry in immersive 3D.

#### Examples

- [visionOS-Sampler](https://github.com/shu223/visionOS-Sampler) — Collects focused ARKit and spatial-computing examples for visionOS.
- [Terrain](https://github.com/MatthewWaller/Terrain) — Generates procedural terrain with RealityKit.
- [visionOS_30Days](https://github.com/satoshi0212/visionOS_30Days) — Implements daily examples across visionOS features.
- [visionOS 2 30Days](https://github.com/satoshi0212/visionOS_2_30Days) — Continues the daily challenge format for visionOS 2 APIs.
- [visionOS-examples](https://github.com/IvanCampos/visionOS-examples) — Collects small examples for common visionOS features.
- [Immersive Video Player Sample](https://github.com/morin-innovation/immersive-video-player-sample) — Demonstrates immersive video playback patterns.
- [SpatialPlayer](https://github.com/mikeswanson/SpatialPlayer) — Shows MV-HEVC spatial and immersive video playback.
- [metal-spatial-rendering](https://github.com/metal-by-example/metal-spatial-rendering) — Renders a fully immersive Metal experience with ARKit and Compositor Services.
- [SpatialMetal](https://github.com/musesum/SpatialMetal) — Refactors fully immersive Metal rendering patterns for visionOS.
- [SpatialMetal2](https://github.com/musesum/SpatialMetal2) — Extends SpatialMetal with multiple shader examples.
- [HandTrackingSandbox](https://github.com/kentvchr/HandTrackingSandbox) — Experiments with virtual content reacting to hand tracking and the physical environment.
- [MLX & Mistral](https://github.com/morin-innovation/mlx-swift-examples/tree/visionos-support) — Demonstrates MLX Swift and Mistral examples with visionOS support.
- [metal-spatial-dynamic-mesh](https://github.com/metal-by-example/metal-spatial-dynamic-mesh) — Demonstrates RealityKit LowLevelMesh APIs.
- [Procedural Generation](https://github.com/GabrielWeinbrenner/Procedural-Sandbox/tree/main) — Explores procedural mesh generation with Metal.
- [VisionOS2SampleVolumeOrnaments](https://github.com/tokufxug/VisionOS2SampleVolumeOrnaments) — Demonstrates ornaments attached to volumes.
- [RealityGlitchArt](https://github.com/XanderXu/RealityGlitchArt) — Shows Shader Graph glitch-art materials for visionOS and iOS.
- [SpatialEffectsVideoPlayer](https://github.com/satoshi0212/SpatialEffectsVideoPlayer) — Synchronizes spatial effects with video metadata.
- [HLS360VideoMaterial](https://github.com/ynagatomo/HLS360VideoMaterial) — Uses RealityKit video material with HLS 360 video.
- [VisionProSwiftSamples](https://github.com/HoloLabInc/VisionProSwiftSamples) — Covers ARKit, RealityKit, and GroupActivities examples for Vision Pro.
- [Cubes](https://github.com/dougholland/Cubes) — Demonstrates ornaments, shadows, collisions, and audio with RealityKit.
- [ShaderGraphByExamples](https://github.com/ynagatomo/ShaderGraphByExamples) — Provides Shader Graph material examples for RealityKit.
- [ScenesManager-Example](https://github.com/Tab-To-Tap/ScenesManager-Example) — Demonstrates the ScenesManager SwiftUI package.
- [SGMExamples](https://github.com/ynagatomo/SGMExamples) — Collects Shader Graph material examples for visionOS.
- [Bubbles](https://github.com/sarangborude/Bubbles) — Demonstrates a bubble Shader Graph material.
- [VisionOSGeometryModifier](https://github.com/ckse93/VisionOSGeometryModifier) — Practices Geometry Modifier shader nodes for visionOS.
- [View+WindowGeometryPreferences.swift](https://gist.github.com/drewolbrich/03460fc1bb71b9a821fff722f17ec977) — Shows a SwiftUI modifier for window resize handles and aspect constraints.
- [ScaledVolumeContentView.swift](https://gist.github.com/drewolbrich/ca4802c43e6e226e9cdd95a9e52118b3) — Demonstrates volume scaling behavior with window zoom.
- [Extension+ModelComponent.swift](https://gist.github.com/ynagatomo/282486fd5ea71ac455bfe952c851cf04) — Dumps mesh data from a RealityKit ModelComponent.
- [BubbleRealityView.swift](https://gist.github.com/Matt54/850540e5610a22e5bd161cf66fdae8fb) — Builds a floating transparent sphere RealityView with LowLevelMesh.
- [GradientTextureSphereView.swift](https://gist.github.com/Matt54/42565f55f958ccc21f1bee617be9c2f6) — Creates a LowLevelMesh sphere with a generated gradient texture.

#### Templates & Starters

- [Agora Quickstart](https://github.com/AgoraIO-Community/visionOS-Quickstart) — Provides a minimal visionOS video-call starter using the Agora RTC SDK.
- [visions-os-workshop](https://github.com/xuchi16/vision-os-workshop) — Provides a workshop project for learning visionOS development basics.
- [Apple-visionOS-Workshop](https://github.com/5j54d93/Apple-visionOS-Workshop) — Covers SwiftUI, Model3D, RealityView, immersive spaces, assets, and audio in a starter-style project.

#### Prototypes

- [Settings-visionOS](https://github.com/zhrispineda/Settings-visionOS) — Recreates the visionOS Settings app in SwiftUI.
- [SystemOverlayExample](https://github.com/tochi/SystemOverlayExample) — Demonstrates a system overlay style for visionOS.

#### Research & Robotics

- [visionOS-2-Object-Tracking-Demo](https://github.com/robomex/visionOS-2-Object-Tracking-Demo) — Demonstrates advanced object tracking for visionOS 2.
- [VisionProVacuumDemo](https://github.com/gonchar/VisionProVacuumDemo) — Demonstrates an Apple Vision Pro experience with RealityKit and ARKit.
- [SpatialYOLO](https://github.com/lazygunner/SpatialYOLO) — Runs YOLOv11 object detection with main camera access on Apple Vision Pro.

## Learning

### Communities

- [visionOS Developer Group on LinkedIn](https://www.linkedin.com/groups/12922559/) — Connects visionOS developers and professionals on LinkedIn.
- [/r/VisionPro](https://www.reddit.com/r/VisionPro/) — Hosts discussions about Apple Vision Pro, visionOS apps, and developer topics.
- [Vision Pro Discord](https://discord.com/invite/yRJmAhAQvX) — Offers real-time community discussion for Apple Vision Pro developers and users.
- [Apple Vision Pro Community on X](https://x.com/i/communities/1745863162396557748/) — Provides a public X community for Apple Vision Pro discussions.

### Websites

- [Step Into Vision](https://stepinto.vision/) — Publishes practical tutorials and examples for visionOS developers.

### Newsletters

- [visionOS fan](https://visionos.fan) — Curates news and resources for the visionOS ecosystem.

### Courses

- [Apple Vision Pro Master Class](https://xrbootcamp.com/apple-vision-pro-masterclass/) — Teaches Vision Pro app development with Swift.
- [Become a visionOS Specialist](https://www.kodeco.com/ios/programs/visionos-specialist) — Provides a structured learning path for building visionOS experiences.

### Articles

- [Immersive Video: Which camera is right?](https://medium.com/@portemantho/immersive-video-which-camera-is-right-db429042aa58) — Compares camera choices for immersive video production.
- [Unlocking the Power of visionOS Particles: A Detailed Tutorial](https://medium.com/@xreality.zone/unlocking-the-power-of-visionos-particles-a-detailed-tutorial-211d323f8cf8) — Explains particle effects for visionOS projects.
- [Color Contrast on Apple Vision Pro](https://robinkanatzar.blog/color-contrast-on-apple-vision-pro-2787bd5fcc8c) — Covers color contrast considerations for Apple Vision Pro interfaces.

## Related Lists

- [Awesome Swift](https://github.com/matteocrippa/awesome-swift) — Curates Swift libraries, frameworks, and tools.
- [Awesome iOS](https://github.com/vsouza/awesome-ios) — Collects iOS libraries, tools, and learning resources.
- [Awesome ARKit](https://github.com/olucurious/Awesome-ARKit) — Curates ARKit projects, libraries, and tutorials.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue or pull request.
