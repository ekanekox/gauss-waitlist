# Product Requirements Document (PRD)
# Gauss - AI Diagnostic Assistant for Automotive Mechanics

**Version:** 1.0
**Last Updated:** January 15, 2026
**Status:** 🟡 Waitlist Phase
**Product Owner:** Eduardo Kaneko
**Live Waitlist:** https://gauss-in.vercel.app

---

## 📋 Table of Contents
1. [Executive Summary](#executive-summary)
2. [Problem Statement](#problem-statement)
3. [Vision & Goals](#vision--goals)
4. [Target Users](#target-users)
5. [Product Overview](#product-overview)
6. [Features & Requirements](#features--requirements)
7. [Technical Architecture](#technical-architecture)
8. [User Experience](#user-experience)
9. [Success Metrics](#success-metrics)
10. [Roadmap & Milestones](#roadmap--milestones)
11. [Competitive Analysis](#competitive-analysis)
12. [Risks & Mitigation](#risks--mitigation)
13. [Launch Strategy](#launch-strategy)
14. [Session History & Progress Tracking](#session-history--progress-tracking)

---

## 🎯 Executive Summary

**Gauss** is an AI-powered diagnostic assistant designed to revolutionize automotive repair by helping mechanics diagnose vehicle problems with unprecedented speed and accuracy. By leveraging artificial intelligence trained on millions of diagnostic cases, Gauss transforms complex symptom patterns into ranked, actionable diagnoses in seconds.

### Key Value Proposition
- **50% faster diagnostics** - From hours to minutes
- **30% fewer errors** - Reduced misdiagnoses and unnecessary part replacements
- **Universal coverage** - Support for 50+ vehicle brands
- **Expert-level assistance** - AI trained on millions of real-world cases

### Business Model
- **Freemium:** Free basic diagnostics with limited queries
- **Pro Subscription:** $29/month - Unlimited diagnostics + advanced features
- **Enterprise:** Custom pricing for workshops with multiple mechanics

---

## 🔍 Problem Statement

### Current Pain Points

#### For Mechanics
1. **Time-Consuming Diagnostics**
   - Average diagnostic time: 2-4 hours per complex issue
   - Trial-and-error approach wastes valuable shop time
   - Manual research through service manuals is slow

2. **Knowledge Gaps**
   - Impossible to be expert on all vehicle brands/models
   - New vehicle technologies emerge constantly
   - Rare problems lack documented solutions

3. **Cost of Errors**
   - Wrong part replacements cost $200-$2000+
   - Customer dissatisfaction leads to lost business
   - Reputation damage from misdiagnoses

4. **Limited Resources**
   - Expensive diagnostic equipment not always available
   - Service manuals subscription costs add up
   - Training time takes away from billable hours

#### For Vehicle Owners
1. Overcharged for unnecessary repairs
2. Multiple shop visits for the same problem
3. Lack of trust in mechanic's diagnosis
4. Extended vehicle downtime

### Market Opportunity
- **Total Addressable Market (TAM):** 1.2M automotive mechanics in Brazil
- **Serviceable Addressable Market (SAM):** 300K independent mechanics
- **Initial Target Market:** 50K mechanics in São Paulo region

---

## 🎨 Vision & Goals

### Vision Statement
*"Make expert-level automotive diagnostics accessible to every mechanic, anywhere, instantly."*

### Mission
Enable mechanics to diagnose vehicle problems with the confidence and accuracy of a specialist, reducing diagnostic time and errors while increasing customer satisfaction and shop profitability.

### Strategic Goals

#### Year 1 (2026)
- 🎯 10,000 active users
- 🎯 500 paid subscribers
- 🎯 85% diagnostic accuracy
- 🎯 Sub-5 second response time
- 🎯 NPS score > 50

#### Year 2 (2027)
- 🎯 50,000 active users
- 🎯 5,000 paid subscribers
- 🎯 90% diagnostic accuracy
- 🎯 Expand to Latin America
- 🎯 Integration with major diagnostic tools

#### Year 3 (2028)
- 🎯 200,000 active users
- 🎯 20,000 paid subscribers
- 🎯 95% diagnostic accuracy
- 🎯 Global expansion (US, Europe)
- 🎯 B2B partnerships with OEMs

---

## 👥 Target Users

### Primary Persona: Independent Mechanic
**Name:** João Silva
**Age:** 35
**Location:** São Paulo, Brazil
**Experience:** 10 years

**Profile:**
- Owns small independent shop (2-3 mechanics)
- Services 15-20 vehicles per week
- Specializes in common brands (Fiat, VW, Chevrolet)
- Challenges with newer electronic systems
- Monthly revenue: R$30,000 - R$50,000

**Pain Points:**
- Struggles with unfamiliar vehicle brands
- Loses time on complex electrical issues
- Afraid of misdiagnosis hurting reputation
- Can't afford expensive diagnostic equipment

**Goals:**
- Increase diagnostic speed
- Reduce parts ordering errors
- Build customer trust
- Expand service capabilities

**Tech Proficiency:** Medium (uses WhatsApp, basic apps)

---

### Secondary Persona: Workshop Manager
**Name:** Carlos Mendes
**Age:** 45
**Location:** Rio de Janeiro, Brazil
**Experience:** 20 years

**Profile:**
- Manages workshop with 8 mechanics
- Services 50+ vehicles per week
- Focus on efficiency and profitability
- Invests in training and tools

**Pain Points:**
- Needs to standardize diagnostic quality across team
- Training new mechanics is expensive and time-consuming
- Wants data-driven insights on common issues
- Seeks competitive advantage

**Goals:**
- Increase shop throughput
- Reduce rework and comebacks
- Train junior mechanics faster
- Data analytics for business decisions

**Tech Proficiency:** High (uses workshop management software)

---

### Tertiary Persona: Mobile Mechanic
**Name:** Roberto Santos
**Age:** 28
**Location:** Belo Horizonte, Brazil
**Experience:** 5 years

**Profile:**
- Solo mobile mechanic
- Services 8-12 vehicles per week
- On-site diagnostics and repairs
- Limited tools and equipment

**Pain Points:**
- Can't bring all diagnostic equipment to job sites
- Needs quick diagnosis to quote accurately
- Limited space for service manuals
- Must appear knowledgeable to customers

**Goals:**
- Quick, accurate on-site diagnostics
- Professional appearance
- Efficient parts ordering
- Grow customer base through quality service

**Tech Proficiency:** High (smartphone-first user)

---

## 🚀 Product Overview

### Core Concept
Gauss is a conversational AI assistant that analyzes vehicle symptoms and provides ranked diagnostic hypotheses with actionable next steps. Mechanics describe problems in natural language, and Gauss responds with probability-ranked causes, testing procedures, and repair guidance.

### How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                    MECHANIC INPUT                            │
│  "Honda Civic 2015, suspension noise when going over       │
│   speed bumps, left side"                                   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    AI PROCESSING                             │
│  • Parse symptoms and vehicle info                          │
│  • Cross-reference diagnostic database                      │
│  • Apply probabilistic reasoning                            │
│  • Generate ranked hypotheses                               │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                  GAUSS DIAGNOSIS OUTPUT                      │
│                                                              │
│  1. Lower Control Arm Bushing (87%)                         │
│     💰 Cost: R$150-300 parts + 2h labor                     │
│     🔧 Test: Bounce suspension, check for play              │
│     📦 Parts: #51360-SVA-A01 (Honda OEM)                    │
│                                                              │
│  2. Steering Tie Rod End (62%)                              │
│     💰 Cost: R$200-400 parts + 1.5h labor                   │
│     🔧 Test: Check tie rod play, wheel alignment            │
│     📦 Parts: #53540-SVA-A01 (Honda OEM)                    │
│                                                              │
│  3. Shock Absorber Bump Stop (45%)                          │
│     💰 Cost: R$80-150 parts + 1h labor                      │
│     🔧 Test: Visual inspection, compression test            │
│     📦 Parts: #51722-SVA-A02 (Honda OEM)                    │
│                                                              │
│  💡 Recommendation:                                          │
│  Start with #1 (most likely). Simple test: Have            │
│  customer bounce vehicle while observing lower              │
│  control arm for excessive movement or torn bushing.        │
└─────────────────────────────────────────────────────────────┘
```

### Key Differentiators

1. **Natural Language Interface**
   - No complex menus or codes
   - Conversational, like texting a colleague
   - Brazilian Portuguese native support

2. **Probability-Ranked Results**
   - Not just lists, but confidence scores
   - Helps prioritize testing sequence
   - Reduces wasted diagnostic time

3. **Actionable Guidance**
   - Specific test procedures
   - Part numbers and sources
   - Time and cost estimates

4. **Continuous Learning**
   - Feedback loop improves accuracy
   - Learns from successful repairs
   - Adapts to regional patterns

5. **Mobile-First Design**
   - Works on smartphones in garage
   - Offline capability for key features
   - Fast, under 3 seconds response

---

## 🎯 Features & Requirements

### Phase 1: MVP (Beta Launch) - Q2 2026

#### Core Features

##### 1. Diagnostic Query Interface
**Priority:** P0 (Must Have)

**Description:** Natural language input for vehicle symptoms

**User Story:**
> As a mechanic, I want to describe vehicle symptoms in my own words so that I can get diagnostics without learning complex systems.

**Acceptance Criteria:**
- [ ] Text input field accepts 500+ character descriptions
- [ ] Auto-complete suggests common symptoms
- [ ] Vehicle info (make/model/year) can be included or omitted
- [ ] Response time < 5 seconds for 95% of queries
- [ ] Works on mobile devices (responsive design)

**Technical Requirements:**
- Natural Language Processing (NLP) for symptom extraction
- Entity recognition for vehicle identification
- Context awareness (remembers previous queries in session)
- Rate limiting: 10 queries per minute for free users

---

##### 2. Probability-Ranked Diagnosis List
**Priority:** P0 (Must Have)

**Description:** AI-generated list of likely causes with confidence scores

**User Story:**
> As a mechanic, I want to see the most likely causes first so that I can start with the highest probability issues.

**Acceptance Criteria:**
- [ ] Shows top 5 most likely causes
- [ ] Each cause includes confidence percentage (0-100%)
- [ ] Ranked from highest to lowest probability
- [ ] Includes brief explanation of why it's likely
- [ ] Color-coded by confidence (high/medium/low)

**Technical Requirements:**
- AI model with 85%+ accuracy on validation dataset
- Explainable AI features (reasoning transparency)
- Fallback to general advice if confidence < 40%

**Example Output:**
```
1. Bieleta Dianteira Esquerda (87%) 🟢
   Causa provável: Desgaste por quilometragem elevada

2. Terminal de Direção (62%) 🟡
   Causa provável: Jogo excessivo na articulação

3. Coxim do Amortecedor (45%) 🟠
   Causa provável: Ressecamento da borracha
```

---

##### 3. Diagnostic Test Guidance
**Priority:** P0 (Must Have)

**Description:** Step-by-step testing procedures for each hypothesis

**User Story:**
> As a mechanic, I want clear testing instructions so that I can confirm the diagnosis before ordering parts.

**Acceptance Criteria:**
- [ ] Each diagnosis includes 2-4 specific tests
- [ ] Tests ordered by ease/speed (quick tests first)
- [ ] Includes required tools/equipment
- [ ] Visual aids (images/diagrams) when helpful
- [ ] Safety warnings where applicable

**Example:**
```
🔧 Teste Recomendado:

1. Teste Visual (2 min)
   • Levante o veículo
   • Observe a bieleta com movimento manual da roda
   • Procure por rachadura ou folga excessiva

2. Teste de Movimento (5 min)
   • Aplique movimento vertical na roda
   • Sinta/ouça cliques ou folgas
   • Compare com lado direito

⚠️ Atenção: Use cavaletes adequados. Nunca trabalhe apenas com macaco.
```

---

##### 4. Parts Information & Sourcing
**Priority:** P0 (Must Have)

**Description:** Part numbers, pricing, and where to buy

**User Story:**
> As a mechanic, I want accurate part numbers and prices so that I can quote customers and order efficiently.

**Acceptance Criteria:**
- [ ] Shows OEM part number
- [ ] Lists 2-3 aftermarket alternatives
- [ ] Price range in local currency (R$)
- [ ] Links to major parts suppliers
- [ ] Compatibility verification (fits specific vehicle)

**Technical Requirements:**
- Integration with parts databases (initial: manual curation)
- Price data updated weekly
- Supplier partnerships (future: affiliate links)

**Example:**
```
📦 Peças Necessárias:

OEM (Original):
• Honda #51360-SVA-A01
• R$ 280-320
• Prazo: 2-5 dias

Alternativas:
• Cofap BLA-1523 (Nacional)
  R$ 150-180 | Qualidade: ★★★★☆

• TRW JBU-687 (Importado)
  R$ 200-240 | Qualidade: ★★★★★

🛒 Onde Comprar:
• Mercado Livre • Auto Peças São Paulo • Connect Parts
```

---

##### 5. Cost & Time Estimates
**Priority:** P1 (Should Have)

**Description:** Labor time and total cost projections

**User Story:**
> As a mechanic, I want cost estimates so that I can quote customers accurately and manage shop time.

**Acceptance Criteria:**
- [ ] Labor time in hours (range: min-max)
- [ ] Parts cost estimate
- [ ] Total cost range
- [ ] Regional price adjustments
- [ ] Complexity indicator (easy/medium/hard)

**Example:**
```
💰 Estimativa de Custo:

Mão de Obra: 1.5 - 2.5 horas
Peças: R$ 150 - 320
Total: R$ 300 - 620

Dificuldade: ⭐⭐☆☆☆ (Fácil)
Ferramentas especiais: Não requer
```

---

##### 6. User Account & History
**Priority:** P1 (Should Have)

**Description:** Save queries, track success rate, build knowledge base

**User Story:**
> As a mechanic, I want to track my previous diagnoses so that I can learn patterns and build expertise.

**Acceptance Criteria:**
- [ ] Email/phone login (passwordless magic link)
- [ ] Save unlimited diagnostic history
- [ ] Mark diagnoses as "correct" or "incorrect"
- [ ] Search previous queries
- [ ] Export history to PDF

**Technical Requirements:**
- Authentication via Supabase Auth
- Database schema for query history
- Privacy: user owns their data
- LGPD compliance (Brazilian data protection)

---

##### 7. Feedback Loop
**Priority:** P1 (Should Have)

**Description:** Rate diagnosis accuracy and provide corrections

**User Story:**
> As a mechanic, I want to provide feedback so that Gauss improves and learns from real-world repairs.

**Acceptance Criteria:**
- [ ] Thumbs up/down on each diagnosis
- [ ] "What actually was the problem?" input
- [ ] Photos upload of actual issue (optional)
- [ ] Feedback is anonymous by default
- [ ] Incentive system (points/badges for feedback)

**Technical Implementation:**
- Feedback stored with diagnosis ID
- Used to retrain AI models monthly
- Aggregated for quality metrics
- Privacy-preserving (no customer data)

---

### Phase 2: Pro Features - Q3 2026

##### 8. Advanced AI Capabilities
**Priority:** P1

**Features:**
- [ ] Multi-symptom correlation analysis
- [ ] Preventive maintenance predictions
- [ ] Technical service bulletin (TSB) integration
- [ ] Recall information lookup
- [ ] Historical problem patterns for specific VIN

---

##### 9. Workshop Management
**Priority:** P2

**Features:**
- [ ] Team accounts (multiple mechanics)
- [ ] Diagnostic success rate analytics
- [ ] Common problems dashboard
- [ ] Revenue impact tracking
- [ ] Training mode for new mechanics

---

##### 10. Integration Ecosystem
**Priority:** P2

**Features:**
- [ ] API for workshop management systems
- [ ] Integration with diagnostic scanners (OBD-II)
- [ ] WhatsApp Business integration
- [ ] Parts supplier direct ordering
- [ ] CRM system connectors

---

### Phase 3: Enterprise & Scale - Q4 2026

##### 11. AI Diagnostic Copilot
**Priority:** P2

**Features:**
- [ ] Voice input (hands-free diagnostics)
- [ ] Real-time video analysis (mechanic films issue)
- [ ] AR guidance overlays
- [ ] Multi-language support (Spanish, English)
- [ ] Offline mode with sync

---

##### 12. Business Intelligence
**Priority:** P2

**Features:**
- [ ] Shop performance benchmarking
- [ ] Inventory optimization recommendations
- [ ] Seasonal problem predictions
- [ ] Customer retention insights
- [ ] Pricing optimization suggestions

---

##### 13. Educational Content
**Priority:** P3

**Features:**
- [ ] Interactive diagnostic courses
- [ ] Video tutorials library
- [ ] Certification programs
- [ ] Expert mechanic community forum
- [ ] Weekly technical newsletter

---

## 🏗️ Technical Architecture

### System Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND LAYER                            │
├─────────────────────────────────────────────────────────────┤
│  • Next.js 14 (App Router)                                  │
│  • React 18 (Server & Client Components)                    │
│  • Tailwind CSS (Styling)                                   │
│  • Framer Motion (Animations)                               │
│  • React Hook Form + Zod (Forms & Validation)              │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    API GATEWAY LAYER                         │
├─────────────────────────────────────────────────────────────┤
│  • Next.js API Routes (Edge Functions)                      │
│  • Rate Limiting (Upstash Redis)                            │
│  • Authentication Middleware (Supabase Auth)                │
│  • Request Validation (Zod schemas)                         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                  AI/ML PROCESSING LAYER                      │
├─────────────────────────────────────────────────────────────┤
│  • Claude API (Anthropic) - Main reasoning engine           │
│  • LangChain - Prompt management & chains                   │
│  • Vector Database (Pinecone/Weaviate) - Embeddings        │
│  • Fine-tuned Model (future) - Domain-specific              │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    DATA LAYER                                │
├─────────────────────────────────────────────────────────────┤
│  • Supabase (PostgreSQL) - User data, queries, feedback     │
│  • S3/Cloudflare R2 - Media storage (images, videos)       │
│  • Redis - Caching & session management                     │
│  • ElasticSearch (future) - Full-text search                │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                  INTEGRATION LAYER                           │
├─────────────────────────────────────────────────────────────┤
│  • Parts APIs (MercadoLivre, Connect Parts)                │
│  • Payment Gateway (Stripe/Mercado Pago)                    │
│  • Email Service (Resend/SendGrid)                          │
│  • SMS Service (Twilio)                                     │
│  • Analytics (PostHog, Mixpanel)                            │
└─────────────────────────────────────────────────────────────┘
```

---

### Database Schema (Supabase)

#### Core Tables

```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  name TEXT,
  shop_name TEXT,
  city TEXT,
  subscription_tier TEXT DEFAULT 'free', -- free, pro, enterprise
  subscription_expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_active_at TIMESTAMPTZ DEFAULT NOW(),
  metadata JSONB
);

-- Diagnostic Queries
CREATE TABLE diagnostic_queries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),

  -- Input
  vehicle_make TEXT,
  vehicle_model TEXT,
  vehicle_year INTEGER,
  vehicle_vin TEXT,
  symptom_description TEXT NOT NULL,

  -- AI Response
  diagnoses JSONB NOT NULL, -- Array of diagnosis objects
  confidence_score FLOAT,
  response_time_ms INTEGER,
  model_version TEXT,

  -- Outcome
  feedback_rating INTEGER CHECK (feedback_rating BETWEEN 1 AND 5),
  actual_problem TEXT,
  was_accurate BOOLEAN,

  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  session_id TEXT,
  ip_address INET,
  user_agent TEXT
);

-- Diagnosis Results (normalized)
CREATE TABLE diagnosis_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  query_id UUID REFERENCES diagnostic_queries(id),
  rank INTEGER NOT NULL,

  problem_name TEXT NOT NULL,
  confidence_percentage INTEGER NOT NULL,

  -- Details
  explanation TEXT,
  test_procedures JSONB,
  parts_needed JSONB,
  labor_hours_min FLOAT,
  labor_hours_max FLOAT,
  parts_cost_min FLOAT,
  parts_cost_max FLOAT,

  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Parts Database
CREATE TABLE parts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  part_number TEXT UNIQUE NOT NULL,
  manufacturer TEXT NOT NULL,
  part_type TEXT NOT NULL, -- 'oem', 'aftermarket'

  description TEXT,
  compatible_vehicles JSONB, -- Array of vehicle patterns

  price_min FLOAT,
  price_max FLOAT,
  currency TEXT DEFAULT 'BRL',

  suppliers JSONB, -- Array of supplier info
  last_price_update TIMESTAMPTZ,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- User Feedback
CREATE TABLE feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  query_id UUID REFERENCES diagnostic_queries(id),
  user_id UUID REFERENCES users(id),

  rating INTEGER CHECK (rating BETWEEN 1 AND 5),
  was_helpful BOOLEAN,
  actual_problem TEXT,
  comments TEXT,

  image_urls TEXT[],

  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Subscriptions
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) UNIQUE,

  plan TEXT NOT NULL, -- 'pro_monthly', 'pro_annual', 'enterprise'
  status TEXT NOT NULL, -- 'active', 'cancelled', 'expired'

  started_at TIMESTAMPTZ NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  cancelled_at TIMESTAMPTZ,

  stripe_subscription_id TEXT,
  stripe_customer_id TEXT,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Analytics Events
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),

  event_name TEXT NOT NULL,
  event_properties JSONB,

  session_id TEXT,
  page_url TEXT,
  referrer TEXT,

  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_queries_user_id ON diagnostic_queries(user_id);
CREATE INDEX idx_queries_created_at ON diagnostic_queries(created_at DESC);
CREATE INDEX idx_queries_vehicle ON diagnostic_queries(vehicle_make, vehicle_model, vehicle_year);
CREATE INDEX idx_feedback_query_id ON feedback(query_id);
CREATE INDEX idx_parts_number ON parts(part_number);
CREATE INDEX idx_analytics_user_id ON analytics_events(user_id);
CREATE INDEX idx_analytics_event_name ON analytics_events(event_name);
```

---

### AI/ML Architecture

#### Model Stack

```yaml
Primary Model:
  Provider: Anthropic Claude
  Model: claude-3-opus-20240229
  Purpose: Main diagnostic reasoning
  Context Window: 200K tokens
  Response Time Target: < 3s

Embedding Model:
  Provider: OpenAI / Cohere
  Model: text-embedding-3-large
  Purpose: Semantic search, similarity matching
  Dimensions: 1536 / 1024

Vector Database:
  Provider: Pinecone / Weaviate
  Purpose: Store diagnostic cases, retrieve similar patterns
  Indexes:
    - symptoms_index (100K+ cases)
    - parts_index (500K+ parts)
    - repairs_index (1M+ repair procedures)

Fine-tuning (Phase 2):
  Base Model: GPT-4 / Claude
  Training Data: 50K+ validated diagnostic cases
  Purpose: Domain-specific improvements
  Frequency: Monthly retraining
```

#### Prompt Engineering

```typescript
// Example diagnostic prompt structure
const diagnosticPrompt = `
You are Gauss, an expert automotive diagnostic assistant with 30+ years of experience
across all major vehicle brands. You help mechanics diagnose vehicle problems quickly
and accurately.

CONTEXT:
Vehicle: {vehicle_make} {vehicle_model} {vehicle_year}
VIN: {vin}
Mileage: {mileage} km
Symptoms: {symptom_description}
Previous Work: {previous_repairs}

TASK:
Analyze the symptoms and provide a ranked list of the 5 most likely causes.

REQUIREMENTS:
1. Rank by probability (highest to lowest)
2. Include confidence percentage (0-100%)
3. Explain WHY each is likely
4. Provide specific test procedures
5. List required parts with numbers
6. Estimate time and cost
7. Consider vehicle history and common patterns

OUTPUT FORMAT:
Return JSON with this structure:
{
  "diagnoses": [
    {
      "rank": 1,
      "problem": "Lower Control Arm Bushing",
      "confidence": 87,
      "reasoning": "...",
      "tests": [...],
      "parts": [...],
      "labor_hours": [1.5, 2.5],
      "cost_estimate": [300, 620]
    }
  ],
  "confidence_assessment": "high|medium|low",
  "additional_questions": [...],
  "safety_warnings": [...]
}

IMPORTANT:
- Be specific and actionable
- Use metric units
- Prices in Brazilian Reais (R$)
- Consider Brazilian market parts availability
- Portuguese language for descriptions
- If confidence < 50%, ask for more information
`;
```

---

### Infrastructure & Deployment

#### Hosting
- **Frontend:** Vercel (Edge Network, 50+ regions)
- **Backend API:** Vercel Edge Functions
- **Database:** Supabase (AWS, São Paulo region)
- **Media Storage:** Cloudflare R2
- **CDN:** Cloudflare
- **DNS:** Cloudflare

#### CI/CD Pipeline
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - Checkout code
      - Run unit tests
      - Run integration tests
      - Run E2E tests (Playwright)

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - Build Next.js app
      - Generate static assets
      - Optimize images
      - Bundle size check

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - Deploy to Vercel
      - Run smoke tests
      - Update status page
```

#### Monitoring & Observability
- **Error Tracking:** Sentry
- **Performance:** Vercel Analytics + Web Vitals
- **Logs:** Vercel Logs + Datadog
- **Uptime:** Pingdom / UptimeRobot
- **Status Page:** Statuspage.io

---

## 🎨 User Experience

### Design Principles

1. **Speed First**
   - Every interaction < 1 second
   - Diagnostic results < 5 seconds
   - Progressive loading for slow connections

2. **Mobile-First**
   - 80% of mechanics use smartphones in garage
   - Thumb-friendly tap targets (48x48px minimum)
   - Works offline for core features

3. **Simplicity**
   - No jargon unless necessary
   - Clear visual hierarchy
   - One primary action per screen

4. **Trust & Transparency**
   - Show confidence levels honestly
   - Explain reasoning
   - Provide sources when possible

5. **Actionable**
   - Always provide next steps
   - Link to resources/parts
   - Enable quick decisions

---

### User Flows

#### Flow 1: New User - First Diagnosis

```
1. Landing Page
   ↓ Click "Start Diagnostic"
2. Input Screen
   - Optional: Login prompt (can skip)
   - Text area: "Describe the problem..."
   - Optional: Vehicle info fields
   ↓ Submit (or press Enter)
3. Loading State (< 5s)
   - Animated Gauss logo
   - Progress messages: "Analyzing symptoms..."
   ↓
4. Results Screen
   - Top diagnosis highlighted
   - Expandable details for each
   - "Start with this test" button
   ↓ [User performs test]
5. Feedback Prompt
   - "Was this helpful?" (thumbs up/down)
   - "What did you find?" (text input)
   ↓
6. Upsell (if free user)
   - "Get unlimited diagnostics"
   - Show Pro features
   - "Continue with free plan" option
```

#### Flow 2: Returning User - Quick Diagnosis

```
1. Dashboard
   - Recent diagnoses
   - Quick input field at top
   - Stats: queries this month, accuracy
   ↓ Type symptom
2. Auto-complete Suggestions
   - "Similar to previous case?"
   - Vehicle auto-filled from history
   ↓ Submit
3. Results (instant if cached)
   - Compared to previous similar case
   - "Last time this was: [problem]"
   ↓
4. One-tap Feedback
   - Swipe right: Correct
   - Swipe left: Incorrect
```

---

### Design System

#### Color Palette
```css
/* Brand Colors */
--brand-50: #f0fdf4;
--brand-500: #22c55e;  /* Primary green */
--brand-600: #16a34a;
--brand-700: #15803d;

/* Neutral */
--steel-50: #f8fafc;
--steel-500: #64748b;
--steel-900: #0f172a;

/* Semantic */
--success: #10b981;
--warning: #f59e0b;
--error: #ef4444;
--info: #3b82f6;
```

#### Typography
```css
/* Font Family */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* Scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
```

#### Components
- Buttons: Rounded (12px), bold text, clear states
- Input fields: Large (56px height), clear labels
- Cards: Subtle shadows, hover states
- Modals: Bottom sheet on mobile, centered on desktop
- Toasts: Top-right, auto-dismiss, dismissible

---

### Accessibility (A11y)

**Target Compliance:** WCAG 2.1 Level AA

- [ ] Keyboard navigation (tab order)
- [ ] Screen reader support (ARIA labels)
- [ ] Color contrast ratios > 4.5:1
- [ ] Focus indicators visible
- [ ] Alternative text for images
- [ ] Captions for videos
- [ ] Responsive text sizing
- [ ] No flashing content > 3Hz

---

## 📊 Success Metrics

### North Star Metric
**Successful Diagnoses Per Week**
*Definition: Diagnostic queries marked as "helpful" or "correct" by user*

Target: 1,000 by end of Q2 2026

---

### Key Performance Indicators (KPIs)

#### Product Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Diagnostic Accuracy** | 85%+ | User feedback "was correct" |
| **Response Time** | < 5s (95th percentile) | Server logs |
| **User Retention (Week 1)** | 60%+ | Cohort analysis |
| **User Retention (Month 1)** | 40%+ | Cohort analysis |
| **Daily Active Users (DAU)** | 500 by end Q2 | Login events |
| **Queries per User per Week** | 3+ | Average |
| **Net Promoter Score (NPS)** | 50+ | Survey |
| **Customer Satisfaction (CSAT)** | 4.5/5 | Post-query rating |

#### Business Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Free to Paid Conversion** | 5%+ | Subscription events |
| **Monthly Recurring Revenue (MRR)** | R$14,500 by end Q2 | Stripe/MP |
| **Customer Acquisition Cost (CAC)** | < R$150 | Marketing spend / new users |
| **Customer Lifetime Value (LTV)** | > R$800 | Average revenue per user |
| **LTV:CAC Ratio** | > 3:1 | LTV / CAC |
| **Churn Rate** | < 10% monthly | Cancellations |
| **Average Revenue Per User (ARPU)** | R$15/month | MRR / total users |

#### Technical Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| **API Uptime** | 99.9%+ | Monitoring |
| **Error Rate** | < 0.1% | Sentry |
| **Page Load Time (P95)** | < 2s | Web Vitals |
| **Time to Interactive** | < 3s | Lighthouse |
| **API Response Time (P95)** | < 5s | Datadog |
| **Database Query Time (P95)** | < 100ms | Supabase logs |

---

### Analytics Implementation

#### Event Tracking (PostHog/Mixpanel)

```typescript
// Core Events
EVENTS = {
  // Onboarding
  'signup_started': {},
  'signup_completed': { method: 'email' | 'phone' },
  'profile_completed': {},

  // Engagement
  'query_started': {},
  'query_submitted': {
    vehicle_make, vehicle_model, symptom_length
  },
  'result_viewed': {
    query_id, response_time_ms, confidence_score
  },
  'diagnosis_expanded': {
    query_id, rank, problem_name
  },
  'part_clicked': {
    part_number, supplier
  },

  // Feedback
  'feedback_given': {
    query_id, rating, was_correct
  },
  'problem_reported': {
    query_id, actual_problem
  },

  // Conversion
  'paywall_viewed': { trigger: 'limit' | 'feature' },
  'checkout_started': { plan: 'pro_monthly' },
  'subscription_completed': { plan, amount },

  // Retention
  'return_visit': { days_since_last },
  'history_viewed': {},
  'settings_changed': {},
}
```

---

## 🗺️ Roadmap & Milestones

### Q1 2026 - Foundation ✅

**Status:** Completed

- [x] Market research & user interviews (50 mechanics)
- [x] PRD documentation
- [x] Waitlist landing page
- [x] Brand identity & design system
- [x] Technical architecture design

**Outcomes:**
- 500+ waitlist signups
- Validated problem-solution fit
- Initial partnerships explored

---

### Q2 2026 - MVP Beta Launch 🟡

**Status:** In Planning

**Objectives:**
- Launch beta to 100 mechanics
- Achieve 85% diagnostic accuracy
- Validate pricing & retention

**Key Features:**
- [ ] Diagnostic query interface
- [ ] AI-powered diagnosis (Claude integration)
- [ ] Basic user accounts
- [ ] Mobile-responsive design
- [ ] Feedback system

**Milestones:**
- Week 1-2: Backend setup (Supabase, Auth, APIs)
- Week 3-4: AI integration & prompt engineering
- Week 5-6: Frontend UI/UX implementation
- Week 7: Internal alpha testing
- Week 8: Beta launch to waitlist
- Week 9-10: Feedback iteration
- Week 11: Public beta announcement
- Week 12: Metrics review & planning

**Success Criteria:**
- [ ] 100 beta users onboarded
- [ ] 300+ diagnostic queries completed
- [ ] 85%+ accuracy rate
- [ ] < 5s response time
- [ ] NPS > 40

**Budget:** R$50,000
- AI API costs: R$15,000
- Development: R$20,000
- Infrastructure: R$5,000
- Marketing: R$10,000

---

### Q3 2026 - Public Launch & Growth 🔵

**Status:** Planned

**Objectives:**
- Scale to 1,000 active users
- Launch paid subscriptions
- Achieve R$15,000 MRR

**Key Features:**
- [ ] Advanced diagnostics (multi-symptom)
- [ ] Pro subscription tier
- [ ] Parts marketplace integration
- [ ] Workshop team accounts
- [ ] Mobile app (React Native)

**Go-to-Market Strategy:**
- Content marketing (YouTube, TikTok)
- Influencer partnerships (mechanic YouTubers)
- Workshop owner referrals
- Parts supplier co-marketing
- Trade show presence

**Success Criteria:**
- [ ] 1,000 active users
- [ ] 50 paid subscribers
- [ ] R$15,000 MRR
- [ ] 60% Week 1 retention
- [ ] 4.5/5 CSAT score

---

### Q4 2026 - Enterprise & Expansion 🟣

**Status:** Planned

**Objectives:**
- Launch enterprise tier
- Expand to 3 new cities
- Reach R$50,000 MRR

**Key Features:**
- [ ] Enterprise dashboard
- [ ] API access for integrations
- [ ] White-label options
- [ ] Advanced analytics
- [ ] Offline mode

**Partnerships:**
- Workshop management software (Oficina Manager, etc.)
- Parts distributors (network integration)
- Vehicle manufacturers (TSB access)
- Insurance companies (repair estimates)

**Success Criteria:**
- [ ] 5 enterprise clients
- [ ] 5,000 total users
- [ ] R$50,000 MRR
- [ ] 90% diagnostic accuracy
- [ ] Launched in Rio, BH, Curitiba

---

### 2027 - Scale & Optimization 🚀

**Vision:**
- 50,000 active users
- R$1M ARR
- Expansion to 5 Latin American countries
- Advanced AI features (computer vision, voice)
- Mechanic training platform

---

## 🏆 Competitive Analysis

### Direct Competitors

#### 1. Mitchell1
**Type:** Legacy Software
**Strengths:**
- Established brand (40+ years)
- Comprehensive repair data
- OEM partnerships
- Strong in US market

**Weaknesses:**
- Expensive ($2,000-5,000/year)
- Desktop-only (limited mobile)
- Complex UI (steep learning curve)
- Minimal AI/automation
- Weak in Brazilian market

**Our Advantage:**
- 10x cheaper pricing
- Mobile-first design
- AI-powered simplicity
- Brazilian market focus
- Modern UX

---

#### 2. ALLDATA
**Type:** Repair Information Software
**Strengths:**
- Extensive vehicle coverage
- OEM repair procedures
- Wiring diagrams
- Integrated with shop systems

**Weaknesses:**
- Subscription costs $1,500-3,000/year
- Information overload
- Manual search required
- No AI assistance
- Limited in Brazil

**Our Advantage:**
- Conversational AI vs manual lookup
- Instant results vs digging through manuals
- Affordable for independent mechanics
- Brazilian Portuguese native

---

#### 3. iATN (International Automotive Technicians' Network)
**Type:** Forum/Community
**Strengths:**
- Real mechanic experiences
- Free to use
- Large knowledge base
- Peer support

**Weaknesses:**
- Slow responses (hours/days)
- Quality varies
- No structured diagnostics
- Text-heavy interface
- English-only

**Our Advantage:**
- Instant AI responses vs waiting
- Structured, actionable guidance
- Consistent quality
- Portuguese support
- Professional tool vs forum

---

#### 4. AUTODATA
**Type:** Technical Information
**Strengths:**
- European vehicle focus
- Maintenance schedules
- Technical specs
- Multi-language

**Weaknesses:**
- £500-1,500 per year
- Primarily information lookup
- No diagnostic intelligence
- Complex navigation

**Our Advantage:**
- AI diagnosis vs static information
- Simpler interaction model
- Lower price point
- Tailored for Brazilian market

---

### Indirect Competitors

#### Google Search / YouTube
**Why mechanics use it:**
- Free
- Vast information available
- Video tutorials helpful
- Multiple perspectives

**Our Advantage:**
- Curated, accurate information
- No ads or misinformation
- Faster than searching
- Actionable next steps
- Personalized to specific vehicle

---

#### WhatsApp Groups / Mechanic Communities
**Why mechanics use it:**
- Social connections
- Regional knowledge
- Trust from peers
- Free

**Our Advantage:**
- Available 24/7
- No social pressure
- Consistent quality
- Privacy (don't have to admit lack of knowledge)
- Structured responses

---

### Competitive Positioning

```
                High Price
                    │
         Mitchell1  │  ALLDATA
         AUTODATA   │
                    │
    ────────────────┼────────────────
    Complex         │         Simple
                    │
                    │  🎯 GAUSS
          Forums    │  YouTube
                    │
                Low Price
```

**Our Position:** High Value, Low Price, AI-Powered Simplicity

---

## ⚠️ Risks & Mitigation

### Technical Risks

#### Risk 1: AI Accuracy Below Target (85%)
**Probability:** Medium
**Impact:** High

**Mitigation:**
- Extensive prompt engineering & testing
- Human-in-the-loop validation (Phase 1)
- Continuous feedback integration
- Model fine-tuning with real data
- Fallback to "needs more info" when confidence low

**Monitoring:**
- Track accuracy by vehicle type
- A/B test different prompts
- Weekly accuracy reports
- User feedback analysis

---

#### Risk 2: API Costs Exceed Budget
**Probability:** Medium
**Impact:** Medium

**Mitigation:**
- Implement aggressive caching
- Rate limiting per user tier
- Use cheaper models for simple queries
- Negotiate volume discounts with Anthropic
- Consider open-source models for specific tasks

**Monitoring:**
- Daily API cost tracking
- Cost per query metric
- Set billing alerts
- Optimize prompt tokens

---

#### Risk 3: System Downtime / Outages
**Probability:** Low
**Impact:** High

**Mitigation:**
- Multi-region deployment (Vercel Edge)
- Database replication (Supabase HA)
- Automated failover
- Status page communication
- 99.9% SLA with infrastructure providers

**Monitoring:**
- Uptime monitoring (Pingdom)
- Real-time alerts (PagerDuty)
- Performance dashboards
- Weekly incident reviews

---

### Business Risks

#### Risk 4: Low Free-to-Paid Conversion (<3%)
**Probability:** Medium
**Impact:** High

**Mitigation:**
- Strong value demonstration in free tier
- Strategic paywall placement
- Compelling pro features
- Frictionless upgrade flow
- Introductory pricing (first month discount)

**Testing:**
- A/B test paywall messaging
- User interviews on pricing perception
- Experiment with trial periods
- Optimize onboarding for "aha moment"

---

#### Risk 5: User Acquisition Costs Too High (>R$200)
**Probability:** Medium
**Impact:** High

**Mitigation:**
- Strong referral program (give 2 months, get 1 month)
- Content marketing (SEO, YouTube)
- Workshop partnerships (B2B2C)
- Word-of-mouth via exceptional product
- Community building

**Monitoring:**
- Track CAC by channel
- Calculate LTV:CAC ratio monthly
- Optimize high-performing channels
- Cut underperforming spend

---

#### Risk 6: Competitive Response
**Probability:** Medium
**Impact:** Medium

**Mitigation:**
- Build strong brand & community
- Continuous innovation (AI improvements)
- Lock-in through data (diagnostic history)
- Focus on underserved market (Brazil)
- Speed to market advantage

**Strategy:**
- Patents/IP protection where applicable
- Strategic partnerships
- Rapid iteration based on feedback
- Superior UX as moat

---

### Market Risks

#### Risk 7: Slow Market Adoption
**Probability:** Low
**Impact:** High

**Mitigation:**
- Intensive user testing pre-launch
- Focus on early adopters (tech-savvy mechanics)
- Strong onboarding & education
- Free tier for easy trial
- Influencer endorsements

**Validation:**
- 500+ waitlist signups ✅
- Positive feedback from interviews ✅
- Clear pain point validated ✅

---

#### Risk 8: Regulatory / Liability Concerns
**Probability:** Low
**Impact:** High

**Mitigation:**
- Clear disclaimer (AI is assistant, not replacement)
- Terms of Service (no liability for wrong diagnosis)
- Professional liability insurance
- Compliance with automotive repair regulations
- Consultation with legal experts

**Legal Framework:**
- Terms clearly state "informational purposes"
- User agrees they are qualified professional
- No direct vehicle owner interaction (B2B only)
- Data privacy compliance (LGPD)

---

### Data & Privacy Risks

#### Risk 9: Data Breach / Security Incident
**Probability:** Low
**Impact:** Very High

**Mitigation:**
- SOC 2 compliant infrastructure (Supabase, Vercel)
- Encryption at rest and in transit
- Regular security audits
- Penetration testing
- Bug bounty program (future)
- LGPD compliance

**Response Plan:**
- Incident response playbook
- User notification within 72 hours
- Forensic analysis
- Public transparency report

---

## 🚀 Launch Strategy

### Pre-Launch (Weeks 1-2)

**Objectives:**
- Build anticipation
- Gather final feedback
- Prepare support resources

**Tactics:**
1. **Beta Tester Outreach**
   - Email 100 waitlist priority users
   - Offer 6 months free Pro
   - Schedule 1-on-1 onboarding calls

2. **Content Creation**
   - Tutorial videos (YouTube)
   - FAQ documentation
   - Case studies from alpha testers
   - Social media teasers

3. **Infrastructure Prep**
   - Load testing (simulate 1000 concurrent users)
   - Error monitoring setup
   - Support system ready (Intercom/Crisp)
   - Status page live

---

### Launch Week (Week 3)

**Monday - Soft Launch**
- [ ] Email beta testers (100 users)
- [ ] Post in mechanic WhatsApp groups
- [ ] Announce on social media
- [ ] Monitor closely for issues

**Wednesday - Product Hunt Launch**
- [ ] Submit to Product Hunt
- [ ] Coordinate upvotes from community
- [ ] Engage in comments
- [ ] Share on Twitter/LinkedIn

**Friday - Press Release**
- [ ] Distribute to tech/automotive press
- [ ] Pitch to local São Paulo news
- [ ] Influencer outreach (mechanic YouTubers)
- [ ] Podcast guest appearances

---

### Post-Launch (Weeks 4-12)

**Growth Tactics:**

1. **Content Marketing**
   - Blog: "10 Most Common Honda Civic Problems"
   - YouTube: Diagnostic walkthroughs
   - TikTok: Quick tips, before/after
   - SEO optimization for mechanic searches

2. **Community Building**
   - Private WhatsApp group for Pro users
   - Monthly Q&A webinars
   - Feature request voting
   - User success stories

3. **Partnerships**
   - Parts suppliers (co-marketing)
   - Workshop management software (integrations)
   - Mechanic schools (education discount)
   - Trade associations (sponsorship)

4. **Referral Program**
   - Give 2 months Pro → Get 1 month free
   - Shareable link with tracking
   - Leaderboard for top referrers
   - Grand prize: 1 year Pro + toolkit

5. **Paid Advertising**
   - Facebook/Instagram Ads (mechanic targeting)
   - Google Ads (high-intent keywords)
   - YouTube Pre-roll (mechanic channels)
   - Retargeting for free users

---

### Success Metrics for Launch

**Week 1:**
- [ ] 100 beta users onboarded
- [ ] 50+ diagnostic queries per day
- [ ] < 5 critical bugs reported
- [ ] 4+ star average rating

**Month 1:**
- [ ] 500 registered users
- [ ] 1,000+ queries completed
- [ ] 85%+ accuracy rate
- [ ] 10 paid subscribers
- [ ] R$300 MRR

**Month 3:**
- [ ] 1,000 active users
- [ ] 3,000+ queries per month
- [ ] 50 paid subscribers
- [ ] R$1,500 MRR
- [ ] NPS > 40

---

## 📎 Appendices

### Appendix A: Market Research Summary

**Total Interviews Conducted:** 50 mechanics
**Dates:** December 2025 - January 2026
**Locations:** São Paulo (30), Rio de Janeiro (10), Belo Horizonte (10)

**Key Findings:**
1. **Diagnostic Time is #1 Pain Point**
   - 78% said "slow diagnostics" biggest challenge
   - Average 2-4 hours per complex issue
   - 65% admit guessing sometimes

2. **Willingness to Pay**
   - 62% would pay R$20-40/month
   - 24% would pay R$40-60/month
   - 14% would pay R$60+/month
   - 0% said "would never pay"

3. **Current Tools Used**
   - Google Search: 92%
   - YouTube: 85%
   - WhatsApp Groups: 78%
   - Service Manuals (paid): 34%
   - Mitchell1/ALLDATA: 12%

4. **Feature Priorities**
   - Quick diagnosis: 100%
   - Part numbers: 87%
   - Cost estimates: 81%
   - Test procedures: 76%
   - Video tutorials: 65%

---

### Appendix B: Pricing Research

**Competitive Pricing:**
- Mitchell1: $2,000-5,000/year
- ALLDATA: $1,500-3,000/year
- AUTODATA: £500-1,500/year
- iATN: Free

**Our Pricing Strategy:**

```
Free Tier:
- 10 diagnostics per month
- Basic results (top 3 causes)
- Community support
- Ads displayed

Pro Tier - R$29/month (annual: R$290, ~16% discount):
- Unlimited diagnostics
- All 5+ diagnoses
- Priority support
- No ads
- Diagnostic history
- PDF export

Enterprise - Custom (R$500+ per workshop):
- All Pro features
- Team accounts (5+ mechanics)
- Admin dashboard
- Analytics & insights
- API access
- Dedicated support
- Training sessions
```

**Rationale:**
- R$29 = ~$6 USD (competitive internationally)
- 1-2 saved diagnostics pays for month
- Low enough for impulse purchase
- High enough to sustain business

---

### Appendix C: Technology Decisions

**Why Next.js 14?**
- Server Components for performance
- Edge runtime for global speed
- API routes for backend logic
- TypeScript for reliability
- Great DX and community

**Why Claude over GPT-4?**
- Longer context window (200K vs 128K)
- Better reasoning for complex problems
- Fewer hallucinations reported
- Constitutional AI (safer responses)
- Competitive pricing

**Why Supabase over Firebase?**
- PostgreSQL (more powerful queries)
- Row Level Security (granular permissions)
- Open source (no vendor lock-in)
- Better for relational data
- SQL familiarity

**Why Vercel over AWS?**
- Zero-config deployment
- Edge network (global performance)
- Preview deployments (faster iteration)
- Great DX and support
- Cost-effective for our scale

---

## 📚 References & Resources

### Documentation
- [Next.js 14 Docs](https://nextjs.org/docs)
- [Anthropic Claude API](https://docs.anthropic.com)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Inspiration
- [Linear](https://linear.app) - Clean UX
- [Perplexity](https://perplexity.ai) - AI interaction
- [Vercel](https://vercel.com) - Performance focus
- [Superhuman](https://superhuman.com) - Onboarding excellence

### Research
- [Automotive Repair Market Report 2025](https://example.com)
- [AI in Diagnostics - McKinsey](https://example.com)
- [Brazilian Auto Market Trends](https://example.com)

---

## 📞 Contact & Team

**Product Owner:** Eduardo Kaneko
**Email:** eduardo@gauss.to
**Location:** São Paulo, Brazil
**Website:** https://gauss-in.vercel.app

**Core Team:**
- Product Lead: Eduardo Kaneko
- AI/ML Engineer: [To Be Hired]
- Frontend Developer: [To Be Hired]
- Mechanic Advisor: [Partnership]

---

---

# 📊 SESSION HISTORY & PROGRESS TRACKING

*This section maintains a living record of all development sessions, enabling context continuity across sessions and team members.*

---

## 🎯 How to Use This Section

### For Starting a New Session:
1. Read the **Current Status** section below
2. Review **Last Session Summary** for context
3. Check **Blockers & Decisions Needed**
4. Update your progress in a new session entry

### For Ending a Session:
1. Add a new session entry with date & summary
2. Update **Current Status** section
3. Note any **Blockers** or **Questions**
4. Commit changes to Git

---

## 📍 CURRENT STATUS

**Phase:** 🟡 Pre-MVP / Waitlist Phase
**Last Updated:** January 15, 2026
**Active Sprint:** Sprint 0 - Foundation

### What's Done ✅
- [x] PRD documented (this file)
- [x] Waitlist landing page (https://gauss-in.vercel.app)
- [x] Supabase database configured
- [x] GitHub repository created
- [x] Brand identity defined
- [x] Technical architecture designed
- [x] Target users validated (50 interviews)

### What's Next 🎯
- [ ] Backend API setup (Supabase functions)
- [ ] Claude API integration & prompt engineering
- [ ] User authentication system
- [ ] Core diagnostic UI components
- [ ] Alpha testing with 10 mechanics

### Blockers 🚧
- None currently

### Decisions Needed 🤔
- [ ] Finalize exact pricing (R$29 vs R$39?)
- [ ] Choose vector database (Pinecone vs Weaviate)
- [ ] Define minimum viable accuracy threshold
- [ ] Select payment provider (Stripe vs Mercado Pago)

---

## 📝 SESSION LOG

---

### Session 1 - January 15, 2026 (2.5 hours)
**Participants:** Eduardo Kaneko, Claude Code
**Focus:** Waitlist Setup & Deployment

**Accomplishments:**
- ✅ Deployed waitlist landing page to production
- ✅ Configured Supabase database with RLS policies
- ✅ Integrated PostHog analytics
- ✅ Fixed 7 technical issues (CSS, Next.js, env vars)
- ✅ Created comprehensive SESSION_LOG.md
- ✅ 500+ waitlist signups (pre-existing)

**Technical Details:**
- Stack: Next.js 14, Tailwind CSS, Supabase, Vercel
- Issues resolved:
  1. CSS `border-border` class configuration
  2. Next.js `useSearchParams` Suspense boundary
  3. Vercel framework detection
  4. Environment variable line break in JWT token
  5. Supabase Row Level Security policies
  6. Deployment protection settings
  7. Supabase client initialization

**Key Learnings:**
- Always validate environment variables for hidden characters
- RLS policies must explicitly allow anonymous inserts
- Suspense boundaries required for Next.js static generation
- JWT tokens must be single-line strings

**Code Commits:**
- `168c040` - Initial commit: Gauss waitlist application
- `9016ef8` - Fix: Wrap useSearchParams in Suspense boundary
- `23f6943` - Add vercel.json for proper framework detection
- `286a724` - Fix Supabase client initialization
- `18dfb5f` - Add comprehensive session log documentation

**Decisions Made:**
- ✅ Use Vercel for hosting (vs AWS)
- ✅ Use Supabase for database (vs Firebase)
- ✅ Use PostHog for analytics (vs Mixpanel)
- ✅ Domain: gauss-in.vercel.app

**Next Session Goals:**
- Create detailed PRD document ✅ (completed same session)
- Plan Sprint 1 (MVP development)
- Set up development environment standards
- Define Git branching strategy

**Resources Created:**
- `/SESSION_LOG.md` - Technical session documentation
- `/PRD.md` - This product requirements document
- `/.env.local` - Environment configuration (local)
- `/vercel.json` - Deployment configuration

**Metrics Captured:**
- Waitlist signups: 500+
- Page load time: < 2s
- Form submission success rate: 100% (post-fix)
- Build time: ~4s

**Follow-up Items:**
- [ ] Update Next.js to fix security vulnerabilities
- [ ] Add email verification to waitlist
- [ ] Set up error monitoring (Sentry)
- [ ] Create admin dashboard for waitlist management
- [ ] Schedule beta tester interviews

**Session Rating:** ⭐⭐⭐⭐⭐ (Excellent)
- All objectives achieved
- Multiple blockers resolved
- Production deployment successful
- Strong foundation for MVP development

---

### Session 2 - [Date TBD]
**Participants:** [Names]
**Focus:** [Sprint Goal]

**Accomplishments:**
- [ ] Task 1
- [ ] Task 2

**Technical Details:**
[Implementation notes, APIs used, etc.]

**Key Learnings:**
[What worked, what didn't, insights]

**Code Commits:**
- `[hash]` - [message]

**Decisions Made:**
- [ ] Decision 1
- [ ] Decision 2

**Next Session Goals:**
[Priorities for next session]

**Blockers:**
[What's blocking progress]

---

## 🔄 SPRINT TRACKING

### Sprint 0: Foundation (Jan 8-15, 2026) ✅
**Goal:** Establish project foundation and launch waitlist

**Completed:**
- [x] Market research (50 interviews)
- [x] PRD documentation
- [x] Waitlist page design & development
- [x] Supabase setup
- [x] Vercel deployment
- [x] Analytics integration

**Metrics:**
- Waitlist signups: 500+
- Page views: [TBD - check PostHog]
- Conversion rate: [TBD]

**Retrospective:**
- ✅ What went well: Fast iteration, strong technical foundation
- ⚠️ What to improve: Earlier Supabase policy testing
- 💡 Action items: Document all env var formats, create deployment checklist

---

### Sprint 1: MVP Backend (Jan 16-29, 2026) 🔵
**Goal:** Build core backend infrastructure

**Planned:**
- [ ] Supabase authentication system
- [ ] API routes for diagnostics
- [ ] Claude API integration
- [ ] Database schema finalization
- [ ] Rate limiting implementation

**Success Criteria:**
- [ ] User can create account
- [ ] User can submit diagnostic query
- [ ] AI returns structured response
- [ ] Response time < 5 seconds
- [ ] 10 alpha testers onboarded

---

### Sprint 2: MVP Frontend (Jan 30 - Feb 12, 2026) 🔵
**Goal:** Build user-facing diagnostic interface

**Planned:**
- [ ] Dashboard UI
- [ ] Diagnostic input component
- [ ] Results display component
- [ ] Mobile responsive design
- [ ] Loading states & error handling

---

### Sprint 3: Alpha Testing (Feb 13-26, 2026) 🔵
**Goal:** Internal testing and refinement

**Planned:**
- [ ] Alpha testing with 10 mechanics
- [ ] Feedback collection & iteration
- [ ] Accuracy validation
- [ ] Performance optimization
- [ ] Bug fixes

---

## 📈 METRICS DASHBOARD

*Updated after each sprint*

### User Metrics
| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| Waitlist Signups | 500+ | 1,000 | 🟢 On track |
| Beta Testers | 0 | 100 | 🔵 Not started |
| Active Users | 0 | 10 | 🔵 Not started |
| Paid Users | 0 | 5 | 🔵 Not started |

### Product Metrics
| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| Diagnostic Accuracy | N/A | 85% | 🔵 Not started |
| Avg Response Time | N/A | < 5s | 🔵 Not started |
| User Retention (W1) | N/A | 60% | 🔵 Not started |
| NPS Score | N/A | 50+ | 🔵 Not started |

### Business Metrics
| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| MRR | R$0 | R$500 | 🔵 Not started |
| Conversion Rate | N/A | 5% | 🔵 Not started |
| CAC | N/A | < R$150 | 🔵 Not started |
| Churn Rate | N/A | < 10% | 🔵 Not started |

---

## 💡 LEARNING LOG

*Capture insights, patterns, and best practices*

### Technical Learnings
1. **Next.js App Router with Suspense**
   - Use Suspense boundaries for hooks with runtime data
   - Server Components reduce client-side JavaScript
   - Edge runtime provides global speed

2. **Supabase Row Level Security**
   - Always test RLS policies before deployment
   - Use `anon` role for public access
   - `WITH CHECK (true)` allows unrestricted inserts

3. **Environment Variables**
   - Validate for hidden characters (newlines, spaces)
   - Use `vercel env pull` to debug
   - Prefix with `NEXT_PUBLIC_` for client-side access

### Product Learnings
1. **User Research Insights**
   - Mechanics prefer mobile-first interfaces
   - Natural language > structured forms
   - Cost/time estimates are critical
   - Trust built through transparency

2. **Pricing Strategy**
   - Freemium works for this market
   - R$29/month perceived as affordable
   - Annual discount (16%) improves retention

### Business Learnings
1. **Market Validation**
   - 500+ waitlist signups validate demand
   - Independent mechanics = primary segment
   - São Paulo = ideal launch market

---

## 🎬 QUICK START FOR NEW SESSIONS

### Pre-Session Checklist
- [ ] Read "Current Status" section above
- [ ] Review last session summary
- [ ] Check for blockers/decisions needed
- [ ] Pull latest code from GitHub
- [ ] Verify environment setup works

### Post-Session Checklist
- [ ] Add new session entry with summary
- [ ] Update "Current Status" section
- [ ] Update metrics dashboard (if applicable)
- [ ] Commit PRD changes to Git
- [ ] Note blockers for next session
- [ ] Update sprint tracking

### Session Template
Copy this template for new sessions:

```markdown
### Session [#] - [Date] ([Duration])
**Participants:** [Names]
**Focus:** [Main Goal]

**Accomplishments:**
- [ ] Task 1
- [ ] Task 2

**Technical Details:**
[Code changes, APIs, infrastructure]

**Key Learnings:**
[Insights and takeaways]

**Code Commits:**
- `[hash]` - [message]

**Decisions Made:**
- [ ] Decision 1

**Next Session Goals:**
[Priorities]

**Blockers:**
[Blocking issues]

**Session Rating:** ⭐⭐⭐⭐⭐
[Explanation]
```

---

## 🔗 RELATED DOCUMENTS

- `SESSION_LOG.md` - Detailed technical session notes
- `README.md` - Project overview & setup
- `.env.local.example` - Environment variables template
- `/docs/architecture.md` - Technical architecture (to be created)
- `/docs/api-spec.md` - API documentation (to be created)
- `/docs/design-system.md` - Design guidelines (to be created)

---

**End of PRD**

*This is a living document. Update regularly to maintain alignment and context.*

Last major update: January 15, 2026
Version: 1.0
Next review: February 1, 2026
