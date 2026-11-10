# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## About This Project

The ADT Management System is a web-based application for managing telecommunications ADT (likely referring to telecommunications equipment/devices) deployment, relocation, migration, and termination processes. The system provides process documentation and workflow recommendations for field teams and back-office operations.

## Architecture Overview

This is a static web application built with vanilla HTML5, CSS3, and JavaScript:

### Core Structure
- **Solutions Gateway** (`index.html`) - Minimalist entrance page with background visuals and glowing solution selectors (Interim Solution & Permanent Solution)
- **Permanent Solution Home** (`home.html`) - Main hero dashboard with animated elements, pentagon navigation, and journey start point
- **Interim Solution** (`interim.html`) - Interim solution workflows and dedicated operational content
- **Ongoing Processes** (`ongoing.html`) - Current operational workflows for ADT management
- **Recommendations** (`recommendation.html`) - Improved workflow processes and suggestions
- **Requirements** (`requirement.html`) - Technical requirements and resource needs

### Key Components
- **Modal System**: Clickable cards expand into full-screen modals with detailed process information
- **Navigation**: Responsive navbar with hamburger menu for mobile devices
- **Animations**: GSAP-powered animations for smooth user experience
- **Theming**: Dark theme with CSS custom properties for consistent styling

### File Organization
```
├── index.html              # Solutions Gateway entry page (Interim vs Permanent)
├── home.html               # Permanent Solution home page with hero section
├── interim.html            # Interim Solution workspace page
├── ongoing.html            # Current process workflows
├── recommendation.html     # Recommended process improvements  
├── requirement.html        # System requirements and resources
├── deployment.html         # Deployment process comparison
├── relocation.html          # Relocation process comparison
├── migration.html           # Migration process comparison
├── termination.html         # Termination process comparison
├── css/
│   └── style.css          # Complete styling with animations and responsive design
├── js/
│   └── script.js          # Modal handling, navigation, and GSAP animations
└── assets/
    └── images/            # Background images and visual elements
```

## Development Commands

Since this is a static web application, no build process is required.

### Local Development
```powershell
# Serve the application locally (using Python if available)
python -m http.server 8000

# Or using Node.js http-server if installed
npx http-server . -p 8000

# Or simply open index.html directly in a web browser
Start-Process index.html
```

### Code Quality
```powershell
# Validate HTML files
# No built-in validator, but you can use online tools or VS Code extensions

# Format code (if using Prettier)
npx prettier --write "*.html" "css/*.css" "js/*.js"
```

## Key Features & Architecture Notes

### Modal System Architecture
- Cards with `clickable` class and `data-modal` attributes trigger modal overlays
- Full-screen modals with backdrop blur and smooth animations
- Keyboard navigation support (ESC to close)
- Touch/click-outside-to-close functionality

### Responsive Design Strategy
- Mobile-first approach with hamburger navigation
- CSS Grid layout that collapses to single column on mobile
- Fluid typography using `clamp()` for scalable text
- Breakpoint at 900px for major layout changes

### Animation Framework
- GSAP (GreenSock) for complex animations
- CSS animations for hover effects and UI feedback  
- Storm-themed background with lightning effects and floating elements
- Reveal-on-scroll animations using Intersection Observer API

### Styling Architecture
- CSS Custom Properties (CSS variables) for theming
- Dark theme with blue/teal accent colors
- Consistent spacing and typography scales
- Advanced effects: backdrop filters, box shadows, gradients

## Content Management

### Process Documentation Structure
Each workflow (Deployment, Relocation, Migration, Termination) follows this pattern:
- **Card Summary**: Brief overview in grid layout
- **Modal Details**: Comprehensive step-by-step process
- **Current vs Recommended**: Side-by-side comparison of existing and improved processes

### Adding New Processes
1. Add card in the appropriate section's grid
2. Create corresponding modal with matching ID
3. Update navigation if adding new sections
4. Ensure modal follows existing naming conventions

## Technical Requirements

### Current Dependencies
- **GSAP 3.13.0**: Animation library (loaded via CDN)
- **Google Fonts**: Montserrat and Poppins font families
- **Modern Browser**: Supports CSS Grid, Custom Properties, and ES6+ JavaScript

### Required Access for Full System
According to `requirement.html`:
- Middleware ID for ADT Management ✅ (Received)
- NMS (Network Management System) Access ⚠️ (Required)
- GIS (Geographic Information System) Access ⚠️ (Required)

### Future Requirements
- Teams and Vehicles (after recommendation implementation)

## Code Conventions

### HTML Structure
- Semantic HTML5 elements (`main`, `section`, `article`, `nav`)
- ARIA attributes for accessibility
- Consistent class naming with BEM-like methodology

### CSS Organization
- Custom properties defined in `:root`
- Component-based styling (cards, buttons, modals)
- Animation keyframes grouped together
- Responsive rules at bottom of file

### JavaScript Patterns
- IIFE (Immediately Invoked Function Expressions) for encapsulation
- Event delegation for dynamic elements
- Feature detection for browser compatibility
- Smooth animation handling with proper cleanup

## Domain Knowledge

### ADT Management Workflows

**Deployment**: New ADT installation process involving signup, payment, field team deployment, and back-office closure.

**Outdoor Relocation**: Moving existing ADT equipment to new locations with similar workflow to deployment.

**Migration**: Process for moving customers between ADT devices, involves new ADT allocation and NOC (Network Operations Center) coordination.

**Termination**: Equipment removal process requiring device return to store and NMS port release.

### Key Stakeholders
- **Field Teams**: Handle physical deployment and installation
- **Back Office Teams**: Process closures and administrative tasks  
- **Development Team**: ADT assignment and workflow management
- **NOC (Network Operations Center)**: Handle migrations and technical coordination
- **Store Personnel**: Equipment return acknowledgment

### System Integration Points
- **MW (Middleware)**: Shows customers nearest ADT locations
- **NMS (Network Management System)**: Port management and release
- **GIS**: Geographic information for ADT location optimization