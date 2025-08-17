# Native Forest Co - Land Suitability Assessment Website

A comprehensive web application for assessing land suitability for native New Zealand forest restoration, featuring interactive mapping, GPS coordinate extraction, and automated analysis.

## 🌲 Project Overview

This website helps New Zealand farmers and landowners assess their property's suitability for native forest restoration. Users can:
- Interactively select land areas using drawing tools
- Extract precise GPS coordinates 
- Receive automated land suitability analysis
- Register for detailed reports and professional consultation

## 📁 Project Structure

### Core Website Files
- **`index.html`** - Homepage with hero section and overview
- **`about.html`** - About page with team information (featuring Richard Suhr)
- **`suitability.html`** - Main land assessment tool with interactive map
- **`contact.html`** - Contact form and information
- **`styles.css`** - Comprehensive CSS styling for all pages
- **`script.js`** - Main JavaScript functionality
- **`contact.js`** - Contact form handling

### Advanced Features
- **`map.js`** - Enhanced mapping functionality with Leaflet.js
- **`api-config.js`** - API configuration for land data services
- **`growing-potential-calculator.js`** - Comprehensive land analysis algorithms

### Integration & Setup
- **`hubspot-integration.js`** - Complete HubSpot CRM integration code
- **`google-analytics-setup.md`** - GA4 setup guide and event tracking
- **`crm-recommendations.md`** - CRM solutions comparison and recommendations
- **`api-integration-guide.md`** - Guide for integrating external APIs

## 🚀 Key Features

### Interactive Land Assessment
- **Leaflet.js mapping** with drawing tools (polygon, rectangle, circle)
- **GPS coordinate extraction** to 6 decimal places
- **Real-time area calculation** in hectares
- **User location detection** with auto-zoom to New Zealand
- **Multiple map layers** (street, topographical)

### Automated Analysis
- **Elevation data** via Open-Elevation API
- **Climate data** via Open-Meteo API
- **Soil composition analysis** (simulated with real structure)
- **Vegetation assessment** using NDVI calculations
- **Overall suitability scoring** (0-100 scale)

### User Experience
- **Progressive disclosure** - preview → registration → full report
- **Mobile responsive** design
- **Thinking process** simulation during analysis
- **Professional report generation**
- **Terms & conditions** with explicit contact consent

### Analytics & CRM Integration
- **Google Analytics 4** with comprehensive event tracking
- **HubSpot CRM integration** for lead management
- **Conversion funnel tracking** from visit to registration
- **Geographic analytics** (privacy-safe regional data)

## 📊 Analytics Events Tracked

- `area_selected` - When users draw areas (shape type, size)
- `suitability_check_completed` - Analysis completion (score)
- `user_registration_completed` - Registration conversions
- `coordinates_exported` - GPS data downloads
- `contact_intent` - Contact button clicks
- `map_interactions` - Zoom, pan, layer changes
- `content_engagement` - Species tabs, help usage, scroll depth

## 🛠 Setup Instructions

### 1. Basic Website Deployment
1. Upload all core files to web hosting or GitHub Pages
2. Ensure all files are in the same directory
3. Test that all internal links work correctly

### 2. Google Analytics Setup
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Replace `GA_MEASUREMENT_ID` in `suitability.html` with your actual ID
3. Use `google-analytics-setup.md` for detailed configuration

### 3. CRM Integration (Optional)
1. Follow `crm-recommendations.md` to choose CRM solution
2. Use `hubspot-integration.js` for HubSpot integration
3. Replace placeholder credentials with actual API keys

### 4. API Configuration
1. Review `api-integration-guide.md` for external APIs
2. Configure `api-config.js` with your API keys
3. Test land analysis functionality

## 🌍 Target Audience

- **Primary**: New Zealand farmers with unproductive land
- **Secondary**: Landowners interested in sustainability
- **Geographic Focus**: New Zealand (auto-detects NZ locations)

## 📱 Device Compatibility

- **Desktop**: Full feature set with large map interface
- **Mobile**: Responsive design with optimized controls
- **Tablet**: Hybrid experience with touch-friendly controls

## 🔒 Privacy & Compliance

- **Location tracking**: General regions only (North/South Island)
- **Personal data**: Stored securely, explicit consent required
- **Analytics**: Anonymous user behavior tracking
- **Contact consent**: Clear opt-in for communication

## 📈 Business Model

- **Lead generation**: Free assessment drives consultation bookings
- **Professional services**: Site visits, detailed planning, implementation
- **Conversion funnel**: Website visit → Assessment → Registration → Consultation

## 🔧 Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Mapping**: Leaflet.js with Leaflet Draw plugin
- **APIs**: Open-Elevation, Open-Meteo, planned SoilGrids integration
- **Analytics**: Google Analytics 4
- **CRM**: HubSpot (recommended)
- **Hosting**: GitHub Pages ready, Netlify compatible

## 📞 Contact Information

- **Website**: [To be deployed]
- **Email**: info@nativeforest.co.nz
- **Phone**: 0800 NATIVE
- **Location**: Auckland, New Zealand

## 🎯 Next Steps for Deployment

1. **Test locally**: Open `index.html` in browser to verify functionality
2. **Set up hosting**: Use GitHub Pages following the GitHub setup guide
3. **Configure analytics**: Add your GA4 tracking ID
4. **Set up CRM**: Follow HubSpot integration guide
5. **Launch and monitor**: Track conversion rates and user engagement

## 📝 License

This project is proprietary to Native Forest Co. All rights reserved.

---

Built with care for New Zealand's native ecosystem restoration 🌲🇳🇿