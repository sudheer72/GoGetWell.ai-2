# GoGetWell.ai Multi-Theme System

A comprehensive healthcare platform that adapts its interface based on different medical specialties, providing a contextually relevant experience for users seeking medical treatments.

## 🌟 Features

- **Multi-Theme System**: Dynamic theme switching based on medical specialties
  - Default theme
  - Organ Transplant theme
  - Cardiology theme
  - And more...

- **Specialty Navigation**: 
  - 20+ medical specialties with detailed subspecialties
  - Interactive cards with dropdown menus
  - Specialty-specific theming

- **Patient Journey Visualization**:
  - Step-by-step treatment process
  - Interactive progress indicators
  - Clear call-to-actions

- **Hospital & Doctor Directory**:
  - Featured top hospitals with specialties
  - Detailed doctor profiles
  - Appointment booking system

- **Responsive Design**:
  - Mobile-first approach
  - Adaptive layouts
  - Optimized for all screen sizes

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sudheer72/gogetwell-theme-system.git
   ```

2. Navigate to the project directory:
   ```bash
   cd gogetwell-theme-system
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🎨 Theme System

The platform uses a sophisticated theme system that includes:

- **Color Schemes**: Each specialty has its unique color palette
- **Typography**: Consistent and readable fonts across themes
- **Component Styling**: Theme-specific UI elements
- **Transitions**: Smooth theme switching animations

### Available Themes

1. **Default Theme**
   - Primary: #5932EA
   - Secondary: #8F73FF
   - Accent: #3E97FF

2. **Organ Transplant Theme**
   - Primary: #1976D2
   - Secondary: #2196F3
   - Accent: #0D47A1

3. **Cardiology Theme**
   - Primary: #D32F2F
   - Secondary: #F44336
   - Accent: #B71C1C

## 🏗 Project Structure

```
src/
├── components/
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── Journey.tsx
│   │   ├── Specialties.tsx
│   │   ├── TopHospitals.tsx
│   │   ├── TopDoctors.tsx
│   │   └── ContactSection.tsx
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ThemeProvider.tsx
├── store/
│   └── themeStore.ts
├── styles/
│   └── themes.css
├── types/
│   └── theme.ts
└── pages/
    ├── HomePage.tsx
    └── ThemesPage.tsx
```

## 🛠 Technologies Used

- **React**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Zustand**: State management
- **React Router**: Navigation
- **Lucide React**: Icons

## 📱 Responsive Design

The platform is fully responsive with breakpoints:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px and above

## 🔒 Security

- Secure data handling
- Protected routes
- Input validation
- XSS prevention

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- Project Lead: [Name]
- UI/UX Designer: [Name]
- Frontend Developer: [Name]
- Backend Developer: [Name]

## 📞 Support

For support, email support@gogetwell.ai or join our Slack channel.