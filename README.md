# Awesome visionOS [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

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

- [visionOS Developer Documentation](https://developer.apple.com/documentation/visionos) — Official starting point for visionOS APIs, guides, and sample code. Tags: Apple, documentation.
- [Human Interface Guidelines for visionOS](https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos) — Design guidance for spatial interfaces, windows, volumes, and immersive spaces. Tags: Apple, design.
- [RealityKit Documentation](https://developer.apple.com/documentation/realitykit) — Framework reference for rendering, animation, physics, audio, and Reality Composer Pro content. Tags: RealityKit, documentation.
- [ARKit in visionOS](https://developer.apple.com/documentation/arkit/arkit_in_visionos) — Apple guidance for plane detection, hand tracking, room tracking, and world sensing on visionOS. Tags: ARKit, documentation.

### WWDC

#### 2023

- [Get started with building apps for spatial computing](https://developer.apple.com/videos/play/wwdc2023/10260/) — Introduces the core visionOS app model and spatial computing concepts. Tags: WWDC 2023, overview.
- [Meet Safari for spatial computing](https://developer.apple.com/videos/play/wwdc2023/10279/) — Explains how Safari adapts web experiences for Apple Vision Pro. Tags: WWDC 2023, web.
- [Develop your first immersive app](https://developer.apple.com/videos/play/wwdc2023/10203/) — Walks through building an immersive app with SwiftUI and RealityKit. Tags: WWDC 2023, immersive.
- [Meet SwiftUI for spatial computing](https://developer.apple.com/videos/play/wwdc2023/10109/) — Covers SwiftUI patterns for windows, volumes, and spatial layouts. Tags: WWDC 2023, SwiftUI.
- [Build great games for spatial computing](https://developer.apple.com/videos/play/wwdc2023/10096/) — Covers design and technical foundations for spatial games. Tags: WWDC 2023, games.
- [Design for spatial user interfaces](https://developer.apple.com/videos/play/wwdc2023/10076/) — Explains interaction and layout principles for spatial UI. Tags: WWDC 2023, design.
- [Design for spatial input](https://developer.apple.com/videos/play/wwdc2023/10073/) — Covers gaze, gesture, and controller input patterns. Tags: WWDC 2023, input.
- [Principles of spatial design](https://developer.apple.com/videos/play/wwdc2023/10072/) — Defines foundational design principles for Apple Vision Pro experiences. Tags: WWDC 2023, design.
- [Meet UIKit for spatial computing](https://developer.apple.com/videos/play/wwdc2023/111215/) — Shows how UIKit apps adapt to visionOS. Tags: WWDC 2023, UIKit.
- [Build spatial SharePlay experiences](https://developer.apple.com/videos/play/wwdc2023/10087/) — Explains shared spatial sessions with GroupActivities. Tags: WWDC 2023, SharePlay.
- [Discover Quick Look for spatial computing](https://developer.apple.com/videos/play/wwdc2023/10085/) — Covers spatial Quick Look for 3D assets and previews. Tags: WWDC 2023, Quick Look.
- [Enhance your spatial computing app with RealityKit](https://developer.apple.com/videos/play/wwdc2023/10081/) — Shows how RealityKit powers spatial rendering and interaction. Tags: WWDC 2023, RealityKit.
- [Evolve your ARKit app for spatial experiences](https://developer.apple.com/videos/play/wwdc2023/10091/) — Explains how to adapt ARKit apps for visionOS. Tags: WWDC 2023, ARKit.
- [Explore materials in Reality Composer Pro](https://developer.apple.com/videos/play/wwdc2023/10202/) — Introduces material authoring workflows in Reality Composer Pro. Tags: WWDC 2023, materials.
- [Explore rendering for spatial computing](https://developer.apple.com/videos/play/wwdc2023/10095/) — Covers rendering concepts for spatial apps and games. Tags: WWDC 2023, rendering.
- [Meet ARKit for spatial computing](https://developer.apple.com/videos/play/wwdc2023/10082/) — Introduces ARKit capabilities available on visionOS. Tags: WWDC 2023, ARKit.
- [Take SwiftUI to the next dimension](https://developer.apple.com/videos/play/wwdc2023/10113/) — Demonstrates how SwiftUI composes 2D and 3D content. Tags: WWDC 2023, SwiftUI.
- [Work with Reality Composer Pro content in Xcode](https://developer.apple.com/videos/play/wwdc2023/10273/) — Shows how to load and manage Reality Composer Pro assets in Xcode. Tags: WWDC 2023, assets.
- [Explore enhancements to RoomPlan](https://developer.apple.com/videos/play/wwdc2023/10192/) — Covers RoomPlan updates relevant to spatial workflows. Tags: WWDC 2023, RoomPlan.
- [Meet Object Capture for iOS](https://developer.apple.com/videos/play/wwdc2023/10191/) — Introduces Object Capture workflows for creating 3D assets. Tags: WWDC 2023, Object Capture.

#### 2024

- [Build compelling spatial photo and video experiences](https://developer.apple.com/videos/play/wwdc2024-10166) — Covers spatial photo and video playback patterns for visionOS. Tags: WWDC 2024, media.
- [Compose interactive 3D content in Reality Composer Pro](https://developer.apple.com/videos/play/wwdc2024-10102) — Shows how to build interactive scenes in Reality Composer Pro. Tags: WWDC 2024, Reality Composer Pro.
- [Create enhanced spatial computing experiences with ARKit](https://developer.apple.com/videos/play/wwdc2024-10100) — Explains new ARKit capabilities for spatial apps. Tags: WWDC 2024, ARKit.
- [Design great visionOS apps](https://developer.apple.com/videos/play/wwdc2024-10086) — Gives current design guidance for polished visionOS apps. Tags: WWDC 2024, design.
- [Discover RealityKit APIs for iOS, macOS and visionOS](https://developer.apple.com/videos/play/wwdc2024-10103) — Covers cross-platform RealityKit API improvements. Tags: WWDC 2024, RealityKit.
- [Enhance your spatial computing app with RealityKit audio](https://developer.apple.com/videos/play/wwdc2024-111801) — Shows how to use RealityKit audio in spatial experiences. Tags: WWDC 2024, audio.
- [Explore multiview video playback in visionOS](https://developer.apple.com/videos/play/wwdc2024-10116) — Explains multiview video playback for Apple Vision Pro. Tags: WWDC 2024, video.
- [Explore object tracking for visionOS](https://developer.apple.com/videos/play/wwdc2024-10101) — Covers object tracking workflows using ARKit. Tags: WWDC 2024, object tracking.
- [Introducing enterprise APIs for visionOS](https://developer.apple.com/videos/play/wwdc2024-10139) — Introduces enterprise-only APIs for specialized visionOS apps. Tags: WWDC 2024, enterprise.
- [What's new in SwiftUI](https://developer.apple.com/videos/play/wwdc2024-10144) — Summarizes SwiftUI updates relevant to Apple platforms. Tags: WWDC 2024, SwiftUI.
- [Build a spatial drawing app with RealityKit](https://developer.apple.com/videos/play/wwdc2024-10104) — Demonstrates dynamic meshes and drawing interactions in RealityKit. Tags: WWDC 2024, RealityKit.
- [Create custom environments for your immersive apps in visionOS](https://developer.apple.com/videos/play/wwdc2024-10087) — Explains custom environment authoring for immersive spaces. Tags: WWDC 2024, environments.
- [Dive deep into volumes and immersive spaces](https://developer.apple.com/videos/play/wwdc2024-10153) — Covers advanced structure for volumes and immersive spaces. Tags: WWDC 2024, architecture.
- [Enhance the immersion of media viewing in custom environments](https://developer.apple.com/videos/play/wwdc2024-10115) — Shows custom environments for media viewing apps. Tags: WWDC 2024, immersive video.
- [Explore game input in visionOS](https://developer.apple.com/videos/play/wwdc2024-10094) — Covers hand, controller, and game input patterns. Tags: WWDC 2024, input.
- [Meet TabletopKit for visionOS](https://developer.apple.com/videos/play/wwdc2024-10091) — Introduces TabletopKit for spatial board and tabletop games. Tags: WWDC 2024, TabletopKit.
- [Optimize for the spatial web](https://developer.apple.com/videos/play/wwdc2024-10065) — Covers web performance and design for spatial browsing. Tags: WWDC 2024, web.
- [Render Metal with passthrough in visionOS](https://developer.apple.com/videos/play/wwdc2024-10092) — Explains Metal rendering with passthrough in immersive apps. Tags: WWDC 2024, Metal.
- [Work with windows in SwiftUI](https://developer.apple.com/videos/play/wwdc2024-10149) — Covers window management and layout in SwiftUI. Tags: WWDC 2024, windows.
- [Break into the RealityKit debugger](https://developer.apple.com/videos/play/wwdc2024-10172) — Introduces RealityKit debugging workflows in Xcode. Tags: WWDC 2024, debugging.
- [Bring your iOS or iPadOS game to visionOS](https://developer.apple.com/videos/play/wwdc2024-10093) — Shows how to adapt existing games for visionOS. Tags: WWDC 2024, games.
- [Build immersive web experiences with WebXR](https://developer.apple.com/videos/play/wwdc2024-10066) — Covers WebXR support for immersive web experiences. Tags: WWDC 2024, WebXR.
- [Create custom hover effects in visionOS](https://developer.apple.com/videos/play/wwdc2024-10152) — Explains hover feedback for spatial input. Tags: WWDC 2024, hover.
- [Design interactive experiences for visionOS](https://developer.apple.com/videos/play/wwdc2024-10096) — Covers interaction design for spatial apps. Tags: WWDC 2024, interaction.
- [Discover area mode for Object Capture](https://developer.apple.com/videos/play/wwdc2024-10107) — Explains Object Capture area mode for larger captures. Tags: WWDC 2024, Object Capture.
- [Get started with HealthKit in visionOS](https://developer.apple.com/videos/play/wwdc2024-10083) — Shows how HealthKit data can appear in visionOS apps. Tags: WWDC 2024, HealthKit.
- [Optimize your 3D assets for spatial computing](https://developer.apple.com/videos/play/wwdc2024-10186) — Covers asset optimization for performance and quality. Tags: WWDC 2024, assets.
- [Customize spatial Persona templates in SharePlay](https://developer.apple.com/videos/play/wwdc2024-10201) — Covers Persona layout templates for SharePlay experiences. Tags: WWDC 2024, SharePlay.
- [What's new in Quick Look for visionOS](https://developer.apple.com/videos/play/wwdc2024-10105) — Summarizes Quick Look improvements for visionOS. Tags: WWDC 2024, Quick Look.

#### 2025

- [What's new in RealityKit](https://developer.apple.com/videos/play/wwdc2025/287) — Summarizes RealityKit updates for modern spatial apps. Tags: WWDC 2025, RealityKit.
- [Explore spatial accessory input on visionOS](https://developer.apple.com/videos/play/wwdc2025/289) — Covers accessory tracking and input workflows on visionOS. Tags: WWDC 2025, input.
- [What's new in Metal rendering for immersive apps](https://developer.apple.com/videos/play/wwdc2025/294) — Explains Metal rendering updates for immersive experiences. Tags: WWDC 2025, Metal.
- [Support immersive video playback in visionOS apps](https://developer.apple.com/videos/play/wwdc2025/296) — Shows how to implement immersive video playback. Tags: WWDC 2025, immersive video.
- [Explore video experiences for visionOS](https://developer.apple.com/videos/play/wwdc2025/304) — Covers video presentation patterns for visionOS. Tags: WWDC 2025, video.
- [Optimize your custom environments for visionOS](https://developer.apple.com/videos/play/wwdc2025/305) — Gives performance guidance for custom immersive environments. Tags: WWDC 2025, environments.
- [What's new in visionOS 26](https://developer.apple.com/videos/play/wwdc2025/317) — Summarizes platform updates in visionOS 26. Tags: WWDC 2025, platform.
- [Share visionOS experiences with nearby people](https://developer.apple.com/videos/play/wwdc2025/318) — Covers local shared experiences on Apple Vision Pro. Tags: WWDC 2025, sharing.
- [Learn about Apple Immersive Video technologies](https://developer.apple.com/videos/play/wwdc2025/403) — Explains the technology stack behind Apple Immersive Video. Tags: WWDC 2025, immersive video.
- [Better together: SwiftUI and RealityKit](https://developer.apple.com/videos/play/wwdc2025/274/) — Shows how SwiftUI and RealityKit cooperate in spatial apps. Tags: WWDC 2025, SwiftUI.
- [Meet SwiftUI spatial layout](https://developer.apple.com/videos/play/wwdc2025/273/) — Introduces SwiftUI spatial layout APIs and patterns. Tags: WWDC 2025, layout.
- [What's new in widgets](https://developer.apple.com/videos/play/wwdc2025/278/) — Covers WidgetKit updates across Apple platforms. Tags: WWDC 2025, widgets.
- [Design widgets for visionOS](https://developer.apple.com/videos/play/wwdc2025/255/) — Explains how to design spatial widgets for visionOS. Tags: WWDC 2025, widgets.
- [Set the scene with SwiftUI in visionOS](https://developer.apple.com/videos/play/wwdc2025/290/) — Covers SwiftUI scene structure for visionOS apps. Tags: WWDC 2025, SwiftUI.
- [Bring Swift Charts to the third dimension](https://developer.apple.com/videos/play/wwdc2025/313/) — Shows how charts can become spatial data visualizations. Tags: WWDC 2025, charts.
- [What's new for the spatial web](https://developer.apple.com/videos/play/wwdc2025/237/) — Summarizes web platform updates for spatial browsing. Tags: WWDC 2025, web.
- [Design hover interactions for visionOS](https://developer.apple.com/videos/play/wwdc2025/303/) — Covers hover states and feedback for spatial interfaces. Tags: WWDC 2025, hover.
- [Explore enhancements to your spatial business app](https://developer.apple.com/videos/play/wwdc2025/223/) — Covers platform features for enterprise and business workflows. Tags: WWDC 2025, business.
- [Learn about the Apple Projected Media Profile](https://developer.apple.com/videos/play/wwdc2025/297/) — Explains APMP for immersive media delivery. Tags: WWDC 2025, APMP.

### Apple Samples

#### 2023 and 2024

- [Hello World](https://developer.apple.com/documentation/visionos/world) — Demonstrates windows, volumes, and immersive spaces in one starter app. Tags: Apple sample, fundamentals.
- [Destination Video](https://developer.apple.com/documentation/visionos/destination-video) — Shows 3D video and Spatial Audio playback for media apps. Tags: Apple sample, video.
- [Happy Beam](https://developer.apple.com/documentation/visionos/happybeam) — Builds a SharePlay game using ARKit in a full space. Tags: Apple sample, game.
- [Diorama](https://developer.apple.com/documentation/visionos/diorama) — Demonstrates scene design with Reality Composer Pro. Tags: Apple sample, Reality Composer Pro.
- [Swift Splash](https://developer.apple.com/documentation/visionos/swift-splash) — Uses RealityKit to create an interactive spatial ride. Tags: Apple sample, RealityKit.
- [Incorporating real-world surroundings in an immersive experience](https://developer.apple.com/documentation/visionos/incorporating-real-world-surroundings-in-an-immersive-experience) — Shows how immersive content can respond to room geometry. Tags: Apple sample, scene reconstruction.
- [Placing content on detected planes](https://developer.apple.com/documentation/visionos/placing-content-on-detected-planes) — Demonstrates placement on horizontal and vertical surfaces. Tags: Apple sample, plane detection.
- [Tracking specific points in world space](https://developer.apple.com/documentation/visionos/tracking-points-in-world-space) — Shows how to store and retrieve world anchor positions. Tags: Apple sample, world tracking.
- [Converting side-by-side 3D video to multiview HEVC](https://developer.apple.com/documentation/avfoundation/media_reading_and_writing/converting_side-by-side_3d_video_to_multiview_hevc) — Converts stereoscopic video sources into multiview HEVC. Tags: Apple sample, video pipeline.
- [Construct an immersive environment for visionOS](https://developer.apple.com/documentation/realitykit/construct-an-immersive-environment-for-visionos) — Builds efficient custom environments for immersive spaces. Tags: Apple sample, environments.
- [Transforming RealityKit entities using gestures](https://developer.apple.com/documentation/realitykit/transforming-realitykit-entities-with-gestures) — Adds translation, rotation, and scale gestures to RealityKit entities. Tags: Apple sample, gestures.
- [Simulating physics with collisions in your visionOS app](https://developer.apple.com/documentation/realitykit/simulating-physics-with-collisions-in-your-visionos-app) — Demonstrates RealityKit collisions and physics simulation. Tags: Apple sample, physics.
- [Simulating particles in your visionOS app](https://developer.apple.com/documentation/realitykit/simulating-particles-in-your-visionos-app) — Shows how to attach particle emitters to spatial content. Tags: Apple sample, particles.
- [BOT-anist](https://developer.apple.com/documentation/visionos/BOT-anist) — Builds a multiplatform app with windows, volumes, and animation. Tags: Apple sample, multiplatform.
- [Building an immersive media viewing experience](https://developer.apple.com/documentation/visionos/building-an-immersive-media-viewing-experience) — Combines RealityKit and Reality Composer Pro for immersive media viewing. Tags: Apple sample, immersive media.
- [Enabling video reflections in an immersive environment](https://developer.apple.com/documentation/visionos/enabling-video-reflections-in-an-immersive-environment) — Adds video reflections inside an immersive environment. Tags: Apple sample, video.
- [Exploring object tracking with ARKit](https://developer.apple.com/documentation/visionos/exploring_object_tracking_with_arkit) — Tracks known real-world objects with ARKit. Tags: Apple sample, object tracking.
- [Composing interactive 3D content with RealityKit and Reality Composer Pro](https://developer.apple.com/documentation/realitykit/composing-interactive-3d-content-with-realitykit-and-reality-composer-pro) — Builds interactive scenes using RealityKit timelines and authored content. Tags: Apple sample, RealityKit.
- [Presenting an artist's scene](https://developer.apple.com/documentation/realitykit/presenting-an-artists-scene) — Displays authored Reality Composer Pro scenes in a visionOS app. Tags: Apple sample, art.
- [Creating a spatial drawing app with RealityKit](https://developer.apple.com/documentation/realitykit/creating-a-spatial-drawing-app-with-realitykit) — Uses low-level mesh and texture APIs for interactive drawing. Tags: Apple sample, drawing.
- [Combining 2D and 3D views in an immersive app](https://developer.apple.com/documentation/realitykit/combining-2d-and-3d-views-in-an-immersive-app) — Attaches SwiftUI content to 3D RealityKit entities. Tags: Apple sample, attachments.
- [Creating a Spaceship game](https://developer.apple.com/documentation/realitykit/creating-a-spaceship-game) — Builds an immersive game with RealityKit systems. Tags: Apple sample, game.
- [Rendering a windowed game in stereo](https://developer.apple.com/documentation/realitykit/rendering-a-windowed-game-in-stereo) — Adapts a windowed game for stereoscopic rendering. Tags: Apple sample, stereo rendering.
- [Building local experiences with room tracking](https://developer.apple.com/documentation/arkit/arkit_in_visionos/building_local_experiences_with_room_tracking) — Uses room tracking to align virtual content with a real space. Tags: Apple sample, room tracking.
- [Visualizing HealthKit State of Mind in visionOS](https://developer.apple.com/documentation/healthkit/visualizing_healthkit_state_of_mind_in_visionos) — Presents HealthKit mental wellbeing data in a spatial interface. Tags: Apple sample, HealthKit.
- [Customizing spatial Persona templates](https://developer.apple.com/documentation/groupactivities/customizing-spatial-persona-templates) — Arranges spatial Personas for SharePlay experiences. Tags: Apple sample, SharePlay.
- [Creating a data visualization dashboard with Swift Charts](https://developer.apple.com/documentation/charts/creating-a-data-visualization-dashboard-with-swift-charts) — Builds a spatial dashboard with Swift Charts. Tags: Apple sample, charts.
- [Enhancing your app's content with tab navigation](https://developer.apple.com/documentation/swiftui/enhancing-your-app-content-with-tab-navigation) — Shows tab navigation patterns for SwiftUI apps. Tags: Apple sample, navigation.
- [Creating tabletop games](https://developer.apple.com/documentation/tabletopkit/tabletopkitsample) — Demonstrates spatial board game mechanics with TabletopKit. Tags: Apple sample, TabletopKit.
- [Creating 2D shapes in visionOS with SwiftUI](https://developer.apple.com/documentation/visionos/creating-2d-shapes-in-visionos-with-swiftui) — Draws 2D shapes with SwiftUI in visionOS. Tags: Apple sample, SwiftUI.
- [Creating 3D entities in visionOS with RealityKit](https://developer.apple.com/documentation/visionos/creating-3d-shapes-in-visionos-with-realitykit) — Displays 3D shapes using predefined RealityKit meshes. Tags: Apple sample, RealityKit.
- [Creating SwiftUI windows in visionOS](https://developer.apple.com/documentation/visionos/creating-a-new-swiftui-window-in-visionos) — Manages multiple windows in a SwiftUI visionOS app. Tags: Apple sample, windows.
- [Creating 3D models as movable windows](https://developer.apple.com/documentation/visionos/creating-a-volumetric-window-in-visionos) — Presents 3D content inside a volumetric window. Tags: Apple sample, volumes.
- [Creating immersive spaces in visionOS](https://developer.apple.com/documentation/visionos/creating-immersive-spaces-in-visionos-with-swiftui) — Opens immersive spaces with SwiftUI and RealityKit. Tags: Apple sample, immersive spaces.
- [Displaying a 3D environment through a portal](https://developer.apple.com/documentation/visionos/displaying-a-3d-environment-through-a-portal) — Uses portal rendering to reveal an authored 3D environment. Tags: Apple sample, portals.

#### 2025

- [Canyon Crosser: Building a volumetric hike-planning app](https://developer.apple.com/documentation/visionOS/canyon-crosser-building-a-volumetric-hike-planning-app) — Builds a volumetric planning app with maps and terrain. Tags: Apple sample, volume.
- [Playing immersive media with RealityKit](https://developer.apple.com/documentation/visionos/playing-immersive-media-with-realitykit) — Shows immersive media playback using RealityKit. Tags: Apple sample, immersive media.
- [Petite Asteroids: Building a volumetric visionOS game](https://developer.apple.com/documentation/visionOS/petite-asteroids-building-a-volumetric-visionos-game) — Builds a volumetric arcade game for visionOS. Tags: Apple sample, game.
- [Synchronizing group gameplay with TabletopKit](https://developer.apple.com/documentation/TabletopKit/synchronizing-group-gameplay-with-tabletopkit) — Synchronizes multiplayer tabletop gameplay. Tags: Apple sample, TabletopKit.
- [Tracking accessories in volumetric windows](https://developer.apple.com/documentation/ARKit/tracking-accessories-in-volumetric-windows) — Tracks accessories inside volumetric window experiences. Tags: Apple sample, accessory tracking.
- [Tracking a handheld accessory as a virtual sculpting tool](https://developer.apple.com/documentation/arkit/tracking-a-handheld-accessory-as-a-virtual-sculpting-tool) — Turns tracked accessories into virtual tools. Tags: Apple sample, accessory tracking.
- [Rendering hover effects in Metal immersive apps](https://developer.apple.com/documentation/compositorservices/rendering_hover_effects_in_metal_immersive_apps) — Demonstrates hover rendering in Metal immersive apps. Tags: Apple sample, Metal.
- [Presenting images in RealityKit](https://developer.apple.com/documentation/realitykit/presenting-images-in-realitykit) — Presents images as RealityKit content. Tags: Apple sample, RealityKit.
- [Accessing the main camera](https://developer.apple.com/documentation/visionos/accessing-the-main-camera) — Uses enterprise camera access APIs on visionOS. Tags: Apple sample, camera.
- [Enhancing the audio experience for Petite Asteroids](https://developer.apple.com/documentation/visionos/enhancing-the-audio-experience-for-petite-asteroids) — Adds richer audio to a volumetric game. Tags: Apple sample, audio.
- [Bringing your SceneKit projects to RealityKit](https://developer.apple.com/documentation/realitykit/bringing-your-scenekit-projects-to-realitykit) — Migrates SceneKit concepts and assets to RealityKit. Tags: Apple sample, migration.
- [Loading entities with ShaderGraph materials](https://developer.apple.com/documentation/realitycomposerpro/loading-entities-with-shadergraph-materials) — Loads Reality Composer Pro entities with ShaderGraph materials. Tags: Apple sample, ShaderGraph.
- [Rendering stereoscopic video with RealityKit](https://developer.apple.com/documentation/realitykit/rendering-stereoscopic-video-with-realitykit) — Renders stereoscopic video with RealityKit. Tags: Apple sample, stereoscopic video.
- [Animating hand models in visionOS](https://developer.apple.com/documentation/visionos/animating-hand-models-in-visionos) — Animates virtual hand models from tracked hand data. Tags: Apple sample, hand tracking.
- [Integrating virtual objects with your environment](https://developer.apple.com/documentation/realitykit/integrating-virtual-objects-with-your-environment) — Blends virtual objects with real-world surroundings. Tags: Apple sample, environment integration.

## Open Source

### Libraries

#### UI & Spatial UX

- [RealityUI](https://github.com/maxxfrazer/RealityUI) — Provides reusable 3D UI controls and gestures for RealityKit with visionOS support. Tags: UI, RealityKit.
- [SwiftUIX](https://github.com/SwiftUIX/SwiftUIX) — Adds SwiftUI components and utilities for Apple platforms with visionOS support. Tags: SwiftUI, components.
- [Glur](https://github.com/joogps/Glur) — Adds efficient progressive blur effects to SwiftUI views. Tags: SwiftUI, visual effects.
- [SwiftUI Shimmer](https://github.com/markiv/SwiftUI-Shimmer) — Adds lightweight shimmer animations to SwiftUI views. Tags: SwiftUI, animation.
- [CodeEditorView](https://github.com/mchakravarty/CodeEditorView) — Provides a SwiftUI code editor view for Apple platforms. Tags: SwiftUI, editor.
- [DSWaveformImage](https://github.com/dmrschmidt/DSWaveformImage) — Draws audio waveforms with native Swift and SwiftUI interfaces. Tags: SwiftUI, audio.
- [EmojiKit](https://github.com/Kankoda/EmojiKit) — Provides emoji utilities for Swift apps on Apple platforms. Tags: Swift, utilities.
- [Vortex](https://github.com/twostraws/Vortex) — Creates high-performance particle effects in SwiftUI. Tags: SwiftUI, particles.
- [Orb](https://github.com/metasidd/Orb) — Demonstrates an animated orb built entirely in SwiftUI. Tags: SwiftUI, visual effects.
- [ScenesManager](https://github.com/Tab-To-Tap/ScenesManager) — Manages windows and immersive spaces in visionOS apps. Tags: SwiftUI, scene management.
- [MeshingKit](https://github.com/rryam/MeshingKit) — Adds mesh gradients to SwiftUI apps across Apple platforms. Tags: SwiftUI, gradients.
- [CompactSlider](https://github.com/buh/CompactSlider) — Provides a compact SwiftUI slider control for Apple platforms. Tags: SwiftUI, controls.

#### Input & Gestures

- [HandGesture](https://github.com/johnhaney/HandGesture) — Provides a semantic gesture API for visionOS hand tracking. Tags: hand tracking, gestures.
- [VisionGesture](https://github.com/AlohaYos/VisionGesture) — Offers a gesture playground with simulator-friendly fake hand tracking. Tags: gestures, simulator.
- [HandVector](https://github.com/XanderXu/HandVector) — Calculates hand gesture similarity using cosine similarity. Tags: hand tracking, gestures.

#### RealityKit & ARKit

- [RealityGeometries](https://github.com/maxxfrazer/RealityGeometries) — Adds reusable geometry primitives for RealityKit projects. Tags: RealityKit, geometry.
- [GoncharKit](https://github.com/gonchar/GoncharKit) — Provides helper functions for RealityKit development on visionOS. Tags: RealityKit, utilities.
- [PlanePlopper](https://github.com/daniloc/PlanePlopper) — Simplifies persistent immersive object placement. Tags: RealityKit, placement.
- [RealityBounds](https://github.com/IvanMathy/RealityBounds) — Visualizes bounding boxes for RealityKit entities on visionOS. Tags: RealityKit, debugging.
- [FindSurface](https://github.com/CurvSurf/FindSurface-visionOS) — Extracts geometric surfaces from point cloud data on visionOS. Tags: ARKit, geometry.

#### Metal & Graphics

- [MetalSplatter](https://github.com/scier/MetalSplatter) — Renders Gaussian splats on Apple platforms including visionOS. Tags: Metal, Gaussian splats.
- [ShaderGraphCoder](https://github.com/praeclarum/ShaderGraphCoder) — Generates RealityKit Shader Graph materials from Swift code. Tags: ShaderGraph, RealityKit.
- [swifty-creatives](https://github.com/yukiny0811/swifty-creatives) — Provides a Metal-based creative coding framework inspired by Processing. Tags: Metal, creative coding.

#### Media & Immersive Video

- [openimmersivelib](https://github.com/acuteimmersive/openimmersivelib) — Provides a reusable immersive and spatial video playback package. Tags: immersive video, playback.
- [KSPlayer](https://github.com/kingslay/KSPlayer) — Plays video with AVPlayer and FFmpeg across Apple platforms. Tags: video, AVPlayer.
- [HaishinKit.swift](https://github.com/shogo4405/HaishinKit.swift) — Streams camera and microphone media over RTMP and SRT. Tags: streaming, media.
- [YouTubePlayerKit](https://github.com/SvenTiigi/YouTubePlayerKit) — Embeds YouTube playback in Swift apps across Apple platforms. Tags: video, SwiftUI.

#### Build & Tooling

- [AppState](https://github.com/0xLeif/AppState) — Adds state management and dependency injection utilities for Swift 6 apps. Tags: architecture, Swift.
- [MockingKit](https://github.com/danielsaidi/MockingKit) — Helps mock protocols and classes in Swift tests. Tags: testing, mocks.

#### Cross-platform

- [NativeScript](https://github.com/NativeScript/NativeScript) — Provides a JavaScript and TypeScript runtime with visionOS support. Tags: JavaScript, cross-platform.
- [react-native-visionos](https://github.com/callstack/react-native-visionos) — Enables React Native apps to target visionOS. Tags: React Native, cross-platform.
- [react-native-bottom-tabs](https://github.com/callstackincubator/react-native-bottom-tabs) — Adds native bottom tabs with visionOS support for React Native apps. Tags: React Native, navigation.
- [Mapbox](https://docs.mapbox.com/ios/maps/api/11.2.0-beta.1/documentation/mapboxmaps/work-with-visionos/) — Shows how to use the Mapbox Maps SDK in visionOS apps. Tags: maps, SDK.
- [RevenueCat Purchases](https://github.com/RevenueCat/purchases-ios) — Handles in-app purchases and subscriptions across Apple platforms. Tags: StoreKit, subscriptions.
- [Flare](https://github.com/space-code/flare) — Provides a Swift package for in-app purchases and subscriptions. Tags: StoreKit, subscriptions.
- [Firebase](https://github.com/firebase/firebase-ios-sdk) — Provides Firebase SDKs for Apple app development. Tags: database, backend.
- [OAuthKit](https://github.com/codefiesta/OAuthKit) — Adds OAuth 2.0 authentication helpers for Swift apps. Tags: authentication, OAuth.
- [MLX](https://github.com/ml-explore/mlx-swift) — Provides Swift APIs for Apple's MLX array framework. Tags: machine learning, Swift.
- [LLM.swift](https://github.com/eastriverlee/LLM.swift) — Runs local large language models from Swift. Tags: AI, LLM.
- [WhisperKit](https://github.com/argmaxinc/WhisperKit) — Provides on-device speech recognition for Apple silicon. Tags: speech, machine learning.
- [GPTalks](https://github.com/SilverMarcs/GPTalks) — Demonstrates a multiplatform ChatGPT API client written in SwiftUI. Tags: AI, SwiftUI.

### Tools

#### Debugging

- [reality-check](https://github.com/ml-opensource/reality-check) — Previews and debugs RealityKit AR projects from a macOS app. Tags: debugging, RealityKit.
- [SceneVisualizer](https://github.com/agg23/SceneVisualizer) — Visualizes LiDAR information received by Apple Vision Pro. Tags: debugging, ARKit.

#### Asset Pipeline

- [Spatial](https://blog.mikeswanson.com/spatial/) — Processes MV-HEVC video files and spatial photos from a macOS CLI. Tags: video, CLI.
- [Spatial-Metadata](https://github.com/Kartaverse/Spatial-Metadata) — Prepares immersive media metadata for Apple Vision Pro and Meta Quest. Tags: metadata, immersive media.
- [visionOS App Icon Web Previewer](https://gnikoloff.github.io/visionos-web-app-icon-maker/) — Previews and exports layered app icons for visionOS. Tags: icons, web tool.
- [HoudiniMeshSync](https://github.com/xjorma/HoudiniMeshSync) — Syncs meshes between Houdini and Apple Vision Pro workflows. Tags: Houdini, assets.
- [RCPMaterials](https://github.com/JamieScanlon/RCPMaterials?tab=readme-ov-file) — Collects dynamic Reality Composer Pro materials for reuse. Tags: Reality Composer Pro, materials.

#### CI / Build

- [ios-cmake](https://github.com/leetal/ios-cmake) — Provides a CMake toolchain with native visionOS support. Tags: CMake, build.
- [CopilotForXcode](https://github.com/intitni/CopilotForXcode) — Adds AI code completion and chat assistance to Xcode. Tags: Xcode, AI.
- [Alex Sidebar](https://alexcodes.app) — Integrates an AI assistant sidebar into Xcode workflows. Tags: Xcode, AI.

### Projects

#### Apps

- [PersonaChess](https://github.com/FlipByBlink/PersonaChess) — Implements a chess game with SharePlay support. Tags: game, SharePlay.
- [HandsRuler](https://github.com/FlipByBlink/HandsRuler) — Measures distances using hand tracking on Apple Vision Pro. Tags: hand tracking, utility.
- [ALVR](https://github.com/alvr-org/alvr-visionos) — Provides an experimental visionOS client for ALVR and SteamVR streaming. Tags: streaming, VR.
- [AugmenosCode](https://github.com/augmenos/AugmenosCode) — Showcases visionOS capabilities through an educational open-source app. Tags: education, app.
- [openimmersive](https://github.com/acuteimmersive/openimmersive) — Plays open immersive video content on Apple Vision Pro. Tags: immersive video, app.
- [pISSStream](https://github.com/Jaennaet/pISSStream?tab=readme-ov-file#visionos) — Visualizes International Space Station waste-tank telemetry in immersive 3D. Tags: data visualization, app.

#### Examples

- [visionOS-Sampler](https://github.com/shu223/visionOS-Sampler) — Collects focused ARKit and spatial-computing examples for visionOS. Tags: examples, ARKit.
- [Terrain](https://github.com/MatthewWaller/Terrain) — Generates procedural terrain with RealityKit. Tags: RealityKit, terrain.
- [visionOS_30Days](https://github.com/satoshi0212/visionOS_30Days) — Implements daily examples across visionOS features. Tags: examples, SwiftUI.
- [visionOS 2 30Days](https://github.com/satoshi0212/visionOS_2_30Days) — Continues the daily challenge format for visionOS 2 APIs. Tags: examples, visionOS 2.
- [visionOS-examples](https://github.com/IvanCampos/visionOS-examples) — Collects small examples for common visionOS features. Tags: examples, SwiftUI.
- [Immersive Video Player Sample](https://github.com/morin-innovation/immersive-video-player-sample) — Demonstrates immersive video playback patterns. Tags: immersive video, sample.
- [SpatialPlayer](https://github.com/mikeswanson/SpatialPlayer) — Shows MV-HEVC spatial and immersive video playback. Tags: spatial video, sample.
- [metal-spatial-rendering](https://github.com/metal-by-example/metal-spatial-rendering) — Renders a fully immersive Metal experience with ARKit and Compositor Services. Tags: Metal, Compositor Services.
- [SpatialMetal](https://github.com/musesum/SpatialMetal) — Refactors fully immersive Metal rendering patterns for visionOS. Tags: Metal, sample.
- [SpatialMetal2](https://github.com/musesum/SpatialMetal2) — Extends SpatialMetal with multiple shader examples. Tags: Metal, shaders.
- [HandTrackingSandbox](https://github.com/kentvchr/HandTrackingSandbox) — Experiments with virtual content reacting to hand tracking and the physical environment. Tags: hand tracking, sandbox.
- [MLX & Mistral](https://github.com/morin-innovation/mlx-swift-examples/tree/visionos-support) — Demonstrates MLX Swift and Mistral examples with visionOS support. Tags: AI, MLX.
- [metal-spatial-dynamic-mesh](https://github.com/metal-by-example/metal-spatial-dynamic-mesh) — Demonstrates RealityKit LowLevelMesh APIs. Tags: RealityKit, mesh.
- [Procedural Generation](https://github.com/GabrielWeinbrenner/Procedural-Sandbox/tree/main) — Explores procedural mesh generation with Metal. Tags: Metal, procedural generation.
- [VisionOS2SampleVolumeOrnaments](https://github.com/tokufxug/VisionOS2SampleVolumeOrnaments) — Demonstrates ornaments attached to volumes. Tags: volumes, ornaments.
- [RealityGlitchArt](https://github.com/XanderXu/RealityGlitchArt) — Shows Shader Graph glitch-art materials for visionOS and iOS. Tags: ShaderGraph, visual effects.
- [SpatialEffectsVideoPlayer](https://github.com/satoshi0212/SpatialEffectsVideoPlayer) — Synchronizes spatial effects with video metadata. Tags: video, spatial effects.
- [HLS360VideoMaterial](https://github.com/ynagatomo/HLS360VideoMaterial) — Uses RealityKit video material with HLS 360 video. Tags: video, RealityKit.
- [VisionProSwiftSamples](https://github.com/HoloLabInc/VisionProSwiftSamples) — Covers ARKit, RealityKit, and GroupActivities examples for Vision Pro. Tags: examples, RealityKit.
- [Cubes](https://github.com/dougholland/Cubes) — Demonstrates ornaments, shadows, collisions, and audio with RealityKit. Tags: RealityKit, sample.
- [ShaderGraphByExamples](https://github.com/ynagatomo/ShaderGraphByExamples) — Provides Shader Graph material examples for RealityKit. Tags: ShaderGraph, examples.
- [ScenesManager-Example](https://github.com/Tab-To-Tap/ScenesManager-Example) — Demonstrates the ScenesManager SwiftUI package. Tags: SwiftUI, scene management.
- [SGMExamples](https://github.com/ynagatomo/SGMExamples) — Collects Shader Graph material examples for visionOS. Tags: ShaderGraph, materials.
- [Bubbles](https://github.com/sarangborude/Bubbles) — Demonstrates a bubble Shader Graph material. Tags: ShaderGraph, sample.
- [VisionOSGeometryModifier](https://github.com/ckse93/VisionOSGeometryModifier) — Practices Geometry Modifier shader nodes for visionOS. Tags: ShaderGraph, geometry.
- [View+WindowGeometryPreferences.swift](https://gist.github.com/drewolbrich/03460fc1bb71b9a821fff722f17ec977) — Shows a SwiftUI modifier for window resize handles and aspect constraints. Tags: gist, windows.
- [ScaledVolumeContentView.swift](https://gist.github.com/drewolbrich/ca4802c43e6e226e9cdd95a9e52118b3) — Demonstrates volume scaling behavior with window zoom. Tags: gist, volumes.
- [Extension+ModelComponent.swift](https://gist.github.com/ynagatomo/282486fd5ea71ac455bfe952c851cf04) — Dumps mesh data from a RealityKit ModelComponent. Tags: gist, RealityKit.
- [BubbleRealityView.swift](https://gist.github.com/Matt54/850540e5610a22e5bd161cf66fdae8fb) — Builds a floating transparent sphere RealityView with LowLevelMesh. Tags: gist, RealityKit.
- [GradientTextureSphereView.swift](https://gist.github.com/Matt54/42565f55f958ccc21f1bee617be9c2f6) — Creates a LowLevelMesh sphere with a generated gradient texture. Tags: gist, RealityKit.

#### Templates & Starters

- [Agora Quickstart](https://github.com/AgoraIO-Community/visionOS-Quickstart) — Provides a minimal visionOS video-call starter using the Agora RTC SDK. Tags: starter, video call.
- [visions-os-workshop](https://github.com/xuchi16/vision-os-workshop) — Provides a workshop project for learning visionOS development basics. Tags: workshop, starter.
- [Apple-visionOS-Workshop](https://github.com/5j54d93/Apple-visionOS-Workshop) — Covers SwiftUI, Model3D, RealityView, immersive spaces, assets, and audio in a starter-style project. Tags: workshop, starter.

#### Prototypes

- [VisionOS-Prototypes](https://github.com/Volorf/VisionOS-Prototypes) — Collects interactive visionOS prototypes built with SwiftUI. Tags: prototypes, SwiftUI.
- [Settings-visionOS](https://github.com/zhrispineda/Settings-visionOS) — Recreates the visionOS Settings app in SwiftUI. Tags: prototype, SwiftUI.
- [SystemOverlayExample](https://github.com/tochi/SystemOverlayExample) — Demonstrates a system overlay style for visionOS. Tags: prototype, overlay.

#### Research & Robotics

- [visionOS-2-Object-Tracking-Demo](https://github.com/robomex/visionOS-2-Object-Tracking-Demo) — Demonstrates advanced object tracking for visionOS 2. Tags: object tracking, ARKit.
- [VisionProVacuumDemo](https://github.com/gonchar/VisionProVacuumDemo) — Demonstrates an Apple Vision Pro experience with RealityKit and ARKit. Tags: robotics, RealityKit.
- [SpatialYOLO](https://github.com/lazygunner/SpatialYOLO) — Runs YOLOv11 object detection with main camera access on Apple Vision Pro. Tags: object detection, camera.
- [DcmVision](https://github.com/LunarisTeam/DcmVision) — Demonstrates DICOM imaging integration on Apple Vision Pro. Tags: medical imaging, DICOM.
- [VOClimateSpiral](https://github.com/ynagatomo/VOClimateSpiral) — Visualizes the climate spiral in a simple AR app. Tags: data visualization, research.

## Learning

### Communities

- [visionOS Developer Group on LinkedIn](https://www.linkedin.com/groups/12922559/) — Connects visionOS developers and professionals on LinkedIn. Tags: community, LinkedIn.
- [/r/VisionPro](https://www.reddit.com/r/VisionPro/) — Hosts discussions about Apple Vision Pro, visionOS apps, and developer topics. Tags: community, Reddit.
- [Vision Pro Discord](https://discord.com/invite/yRJmAhAQvX) — Offers real-time community discussion for Apple Vision Pro developers and users. Tags: community, Discord.
- [Apple Vision Pro Community on X](https://x.com/i/communities/1745863162396557748/) — Provides a public X community for Apple Vision Pro discussions. Tags: community, X.

### Websites

- [Step Into Vision](https://stepinto.vision/) — Publishes practical tutorials and examples for visionOS developers. Tags: tutorials, website.

### Newsletters

- [visionOS fan](https://visionos.fan) — Curates news and resources for the visionOS ecosystem. Tags: newsletter, curation.

### Courses

- [Apple Vision Pro Master Class](https://xrbootcamp.com/apple-vision-pro-masterclass/) — Teaches Vision Pro app development with Swift. Tags: course, Swift.
- [Become a visionOS Specialist](https://www.kodeco.com/ios/programs/visionos-specialist) — Provides a structured learning path for building visionOS experiences. Tags: course, training.

### Articles

- [Immersive Video: Which camera is right?](https://medium.com/@portemantho/immersive-video-which-camera-is-right-db429042aa58) — Compares camera choices for immersive video production. Tags: article, immersive video.
- [Unlocking the Power of visionOS Particles: A Detailed Tutorial](https://medium.com/@xreality.zone/unlocking-the-power-of-visionos-particles-a-detailed-tutorial-211d323f8cf8) — Explains particle effects for visionOS projects. Tags: article, particles.
- [Color Contrast on Apple Vision Pro](https://robinkanatzar.blog/color-contrast-on-apple-vision-pro-2787bd5fcc8c) — Covers color contrast considerations for Apple Vision Pro interfaces. Tags: article, accessibility.

## Related Lists

- [Awesome Swift](https://github.com/matteocrippa/awesome-swift) — Curates Swift libraries, frameworks, and tools. Tags: Swift, awesome list.
- [Awesome iOS](https://github.com/vsouza/awesome-ios) — Collects iOS libraries, tools, and learning resources. Tags: iOS, awesome list.
- [Awesome ARKit](https://github.com/olucurious/Awesome-ARKit) — Curates ARKit projects, libraries, and tutorials. Tags: ARKit, awesome list.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue or pull request.
