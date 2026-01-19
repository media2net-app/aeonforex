# Responsive Design Analyse - Aeon Forex Landing Page

## Huidige Situatie

### Sections met `min-h-screen`:
1. **Hero Section** (line 65) - `min-h-screen` + stats bovenaan
2. **Video Section** (line 203) - `min-h-screen`
3. **Results Section** (line 225) - `min-h-screen`
4. **Problem Section** (line 250) - `min-h-screen`
5. **Signals Section** (line 300) - `min-h-screen`
6. **Benefits Section** (line 357) - `min-h-screen`
7. **Join Section** (line 410) - `min-h-screen`
8. **Testimonials Section** (line 444) - `min-h-screen`
9. **Join Section 2** (line 576) - `min-h-screen`
10. **FAQ Section** - waarschijnlijk ook `min-h-screen`

### Problemen op Mobiel:

1. **Scroll Snap Conflict**: 
   - `scrollSnapType: 'y mandatory'` forceert elke section om exact 100vh te zijn
   - Op mobiel past content vaak niet in 100vh (stats, langere teksten)
   - Gebruikers kunnen vast komen te zitten tussen sections

2. **Content Overflow**:
   - Hero section heeft nu stats bovenaan + grote heading + buttons
   - Op kleine schermen (320px-375px) past dit niet in 100vh
   - Teksten kunnen worden afgekapt of buttons buiten beeld vallen

3. **Scroll Snap UX op Mobiel**:
   - Scroll snap werkt goed op desktop/tablet
   - Op mobiel kan het frustrerend zijn als content niet past
   - Gebruikers willen vrij kunnen scrollen op mobiel

## Oplossing

### Strategie: Conditionele Scroll Snap + Flexibele Heights

**Desktop/Tablet (>768px)**:
- ✅ Behouden `min-h-screen` voor full-screen effect
- ✅ Scroll snap enabled voor smooth scrolling tussen sections
- ✅ Sections zijn exact 100vh

**Mobiel (<768px)**:
- ✅ `min-h-screen` vervangen door `min-h-[auto]` of `py-12 py-16`
- ✅ Scroll snap disabled
- ✅ Sections kunnen groeien naar content
- ✅ Normale scroll behavior

### Implementatie Details:

1. **Container div**: Conditionele scroll snap
   ```tsx
   className="min-h-screen bg-[#000000] text-white overflow-x-hidden"
   style={{ 
     scrollSnapType: window.innerWidth >= 768 ? 'y mandatory' : 'none',
     height: window.innerWidth >= 768 ? '100vh' : 'auto',
     overflowY: 'auto'
   }}
   ```

2. **Sections**: Responsive height classes
   ```tsx
   className="relative min-h-screen md:min-h-screen flex items-center justify-center ..."
   // Wordt:
   className="relative min-h-[auto] md:min-h-screen flex items-center justify-center py-12 md:py-0 ..."
   ```

3. **Hero Section**: Extra padding op mobiel
   ```tsx
   className="... pt-20 md:pt-24 pb-12 md:pb-0"
   ```

## Specifieke Aanpassingen per Section

### Hero Section:
- **Mobiel**: `min-h-[auto]` + `py-16` (extra ruimte voor stats)
- **Desktop**: `min-h-screen` (behouden)

### Video Section:
- **Mobiel**: `min-h-[auto]` + `py-12`
- **Desktop**: `min-h-screen`

### Results Section:
- **Mobiel**: `min-h-[auto]` + `py-12`
- **Desktop**: `min-h-screen`

### Alle andere sections:
- Zelfde patroon: `min-h-[auto] md:min-h-screen` + `py-12 md:py-0`

## Test Checklist

- [ ] Hero section past volledig op iPhone SE (375px)
- [ ] Hero section past volledig op iPhone 12/13 (390px)
- [ ] Hero section past volledig op Samsung Galaxy (360px)
- [ ] Alle tekst is leesbaar zonder horizontale scroll
- [ ] Buttons zijn volledig zichtbaar en klikbaar
- [ ] Stats bovenaan zijn volledig zichtbaar
- [ ] Scroll werkt natuurlijk op mobiel (geen snap)
- [ ] Scroll snap werkt nog op tablet/desktop
- [ ] Geen content wordt afgekapt
- [ ] Spacing is consistent tussen sections

## Breakpoints

- **Mobile**: < 768px (sm)
- **Tablet**: 768px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

## Aanbevolen Padding/Margins

**Mobiel**:
- Section padding: `py-12` (48px top/bottom)
- Content padding: `px-4` (16px left/right)
- Gap tussen elementen: `gap-4` (16px)

**Tablet/Desktop**:
- Section padding: `py-8 md:py-12` (32px/48px)
- Content padding: `px-6 lg:px-8` (24px/32px)
- Gap tussen elementen: `gap-6 md:gap-8` (24px/32px)
