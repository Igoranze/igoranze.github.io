import React, { useState, useEffect } from 'react';

const AIWeightCoachMockups = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const screens = [
    'welcome',
    'onboarding-basics',
    'body-photo',
    'body-analysis',
    'goal-setting',
    'dashboard',
    'food-capture',
    'food-analysis',
    'progress',
    'coaching',
    'weekly-checkin',
    'subscription'
  ];

  const screenNames = [
    'Welcome',
    'Onboarding',
    'Body Photo',
    'Body Analysis',
    'Goal Setting',
    'Dashboard',
    'Food Capture',
    'Food Analysis',
    'Progress',
    'AI Coaching',
    'Weekly Check-in',
    'Pro Plans'
  ];

  const navigateTo = (index) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentScreen(index);
      setAnimating(false);
    }, 300);
  };

  // Glass card component
  const GlassCard = ({ children, className = '', onClick, style = {} }) => (
    <div
      onClick={onClick}
      className={className}
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        padding: '20px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        ...style
      }}
    >
      {children}
    </div>
  );

  // Gradient button
  const GradientButton = ({ children, onClick, secondary = false, style = {} }) => (
    <button
      onClick={onClick}
      style={{
        background: secondary
          ? 'rgba(255, 255, 255, 0.1)'
          : 'linear-gradient(135deg, #00D9FF 0%, #00FF94 100%)',
        border: secondary ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
        borderRadius: '16px',
        padding: '16px 32px',
        color: secondary ? '#fff' : '#0a0a1a',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        width: '100%',
        transition: 'all 0.3s ease',
        boxShadow: secondary ? 'none' : '0 4px 20px rgba(0, 217, 255, 0.3)',
        ...style
      }}
    >
      {children}
    </button>
  );

  // Progress ring component
  const ProgressRing = ({ progress, size = 120, strokeWidth = 8, color = '#00D9FF' }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;

    return (
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
      </svg>
    );
  };

  // Phone frame
  const PhoneFrame = ({ children }) => (
    <div style={{
      width: '375px',
      height: '812px',
      background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 50%, #0a0a1a 100%)',
      borderRadius: '50px',
      padding: '12px',
      boxShadow: '0 50px 100px rgba(0, 0, 0, 0.5), inset 0 0 0 2px rgba(255,255,255,0.1)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Notch */}
      <div style={{
        position: 'absolute',
        top: '12px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '150px',
        height: '35px',
        background: '#000',
        borderRadius: '20px',
        zIndex: 100
      }} />

      {/* Screen content */}
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: '40px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {children}
      </div>
    </div>
  );

  // Welcome Screen
  const WelcomeScreen = () => (
    <div style={{
      height: '100%',
      background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated gradient orbs */}
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(0, 217, 255, 0.3) 0%, transparent 70%)',
        top: '-100px',
        right: '-100px',
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: 'pulse 4s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(0, 255, 148, 0.2) 0%, transparent 70%)',
        bottom: '-50px',
        left: '-50px',
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: 'pulse 4s ease-in-out infinite 2s'
      }} />

      {/* Logo */}
      <div style={{
        width: '100px',
        height: '100px',
        background: 'linear-gradient(135deg, #00D9FF 0%, #00FF94 100%)',
        borderRadius: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '32px',
        boxShadow: '0 20px 40px rgba(0, 217, 255, 0.3)'
      }}>
        <span style={{ fontSize: '48px' }}>⚡</span>
      </div>

      <h1 style={{
        color: '#fff',
        fontSize: '32px',
        fontWeight: '700',
        marginBottom: '12px',
        textAlign: 'center'
      }}>
        AI Weight Coach
      </h1>

      <p style={{
        color: 'rgba(255,255,255,0.6)',
        fontSize: '16px',
        textAlign: 'center',
        marginBottom: '48px',
        lineHeight: '1.5'
      }}>
        Your personal AI coach for realistic,<br />sustainable weight loss
      </p>

      <div style={{ width: '100%', marginBottom: '16px' }}>
        <GradientButton onClick={() => navigateTo(1)}>
          Get Started
        </GradientButton>
      </div>

      <GradientButton secondary onClick={() => navigateTo(11)}>
        I already have an account
      </GradientButton>

      <p style={{
        color: 'rgba(255,255,255,0.4)',
        fontSize: '12px',
        textAlign: 'center',
        marginTop: '32px'
      }}>
        By continuing, you agree to our Terms & Privacy Policy
      </p>
    </div>
  );

  // Onboarding Basics Screen
  const OnboardingBasicsScreen = () => {
    const [step, setStep] = useState(0);
    const questions = [
      { label: 'What\'s your biological sex?', options: ['Male', 'Female'] },
      { label: 'What\'s your age?', type: 'slider', min: 18, max: 80, default: 30 },
      { label: 'What\'s your height?', type: 'height', default: 170 },
      { label: 'What\'s your current weight?', type: 'weight', default: 75 },
      { label: 'How active are you?', options: ['Sedentary', 'Light', 'Moderate', 'Very Active'] }
    ];

    return (
      <div style={{
        height: '100%',
        background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 100%)',
        padding: '60px 24px 40px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Progress bar */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '40px'
        }}>
          {questions.map((_, i) => (
            <div key={i} style={{
              flex: 1,
              height: '4px',
              borderRadius: '2px',
              background: i <= step ? 'linear-gradient(90deg, #00D9FF, #00FF94)' : 'rgba(255,255,255,0.1)'
            }} />
          ))}
        </div>

        <h2 style={{
          color: '#fff',
          fontSize: '24px',
          fontWeight: '600',
          marginBottom: '32px'
        }}>
          {questions[step].label}
        </h2>

        {questions[step].options && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {questions[step].options.map((option, i) => (
              <GlassCard key={i} onClick={() => setStep(Math.min(step + 1, 4))} style={{ cursor: 'pointer' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span style={{ color: '#fff', fontSize: '18px' }}>{option}</span>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '12px',
                    border: '2px solid rgba(255,255,255,0.3)'
                  }} />
                </div>
              </GlassCard>
            ))}
          </div>
        )}

        {questions[step].type === 'slider' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              fontSize: '72px',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #00D9FF, #00FF94)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '24px'
            }}>
              30
            </div>
            <div style={{
              width: '100%',
              height: '8px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '4px',
              position: 'relative'
            }}>
              <div style={{
                width: '30%',
                height: '100%',
                background: 'linear-gradient(90deg, #00D9FF, #00FF94)',
                borderRadius: '4px'
              }} />
            </div>
          </div>
        )}

        {(questions[step].type === 'height' || questions[step].type === 'weight') && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              fontSize: '72px',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #00D9FF, #00FF94)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {questions[step].type === 'height' ? '170' : '75'}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '24px' }}>
              {questions[step].type === 'height' ? 'cm' : 'kg'}
            </div>
          </div>
        )}

        <div style={{ marginTop: 'auto' }}>
          <GradientButton onClick={() => step < 4 ? setStep(step + 1) : navigateTo(2)}>
            Continue
          </GradientButton>
        </div>
      </div>
    );
  };

  // Body Photo Screen
  const BodyPhotoScreen = () => (
    <div style={{
      height: '100%',
      background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 100%)',
      padding: '60px 24px 40px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h2 style={{
        color: '#fff',
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '12px'
      }}>
        Body Analysis
      </h2>
      <p style={{
        color: 'rgba(255,255,255,0.6)',
        fontSize: '14px',
        marginBottom: '32px'
      }}>
        Take front and side photos for AI body composition analysis
      </p>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
        <GlassCard style={{ flex: 1, textAlign: 'center', padding: '24px' }}>
          <div style={{
            width: '80px',
            height: '120px',
            margin: '0 auto 16px',
            border: '2px dashed rgba(0, 217, 255, 0.5)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '32px', opacity: 0.5 }}>🧍</span>
          </div>
          <p style={{ color: '#fff', fontSize: '14px' }}>Front View</p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>Tap to capture</p>
        </GlassCard>

        <GlassCard style={{ flex: 1, textAlign: 'center', padding: '24px' }}>
          <div style={{
            width: '80px',
            height: '120px',
            margin: '0 auto 16px',
            border: '2px dashed rgba(0, 255, 148, 0.5)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '32px', opacity: 0.5 }}>🧍</span>
          </div>
          <p style={{ color: '#fff', fontSize: '14px' }}>Side View</p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>Tap to capture</p>
        </GlassCard>
      </div>

      <GlassCard style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '24px' }}>🔒</span>
          <div>
            <p style={{ color: '#fff', fontSize: '14px', marginBottom: '4px' }}>Your privacy is protected</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Photos are analyzed on-device and never stored</p>
          </div>
        </div>
      </GlassCard>

      <div style={{ marginTop: 'auto' }}>
        <GradientButton onClick={() => navigateTo(3)}>
          Analyze My Body
        </GradientButton>
        <button style={{
          background: 'none',
          border: 'none',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '14px',
          padding: '16px',
          width: '100%',
          cursor: 'pointer'
        }} onClick={() => navigateTo(4)}>
          Skip for now
        </button>
      </div>
    </div>
  );

  // Body Analysis Results Screen
  const BodyAnalysisScreen = () => (
    <div style={{
      height: '100%',
      background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 100%)',
      padding: '60px 24px 40px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto'
    }}>
      <h2 style={{
        color: '#fff',
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '24px'
      }}>
        Your Body Analysis
      </h2>

      {/* Body composition visual */}
      <GlassCard style={{ marginBottom: '16px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '16px' }}>
          <div>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <ProgressRing progress={72} size={80} color="#00D9FF" />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(90deg)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: '600'
              }}>72%</div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', marginTop: '8px' }}>Lean Mass</p>
          </div>
          <div>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <ProgressRing progress={28} size={80} color="#00FF94" />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(90deg)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: '600'
              }}>28%</div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', marginTop: '8px' }}>Body Fat</p>
          </div>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>
          Estimated range: 26-30% body fat
        </p>
      </GlassCard>

      {/* Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <GlassCard style={{ padding: '16px' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginBottom: '4px' }}>BMI</p>
          <p style={{ color: '#fff', fontSize: '24px', fontWeight: '600' }}>25.9</p>
          <p style={{ color: '#FFB800', fontSize: '11px' }}>Slightly overweight</p>
        </GlassCard>
        <GlassCard style={{ padding: '16px' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginBottom: '4px' }}>TDEE</p>
          <p style={{ color: '#fff', fontSize: '24px', fontWeight: '600' }}>2,180</p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>calories/day</p>
        </GlassCard>
        <GlassCard style={{ padding: '16px' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginBottom: '4px' }}>Muscle Mass</p>
          <p style={{ color: '#fff', fontSize: '24px', fontWeight: '600' }}>54 kg</p>
          <p style={{ color: '#00FF94', fontSize: '11px' }}>Good for your frame</p>
        </GlassCard>
        <GlassCard style={{ padding: '16px' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginBottom: '4px' }}>Metabolic Age</p>
          <p style={{ color: '#fff', fontSize: '24px', fontWeight: '600' }}>34</p>
          <p style={{ color: '#FFB800', fontSize: '11px' }}>4 years older</p>
        </GlassCard>
      </div>

      <div style={{ marginTop: 'auto' }}>
        <GradientButton onClick={() => navigateTo(4)}>
          Set My Goals
        </GradientButton>
      </div>
    </div>
  );

  // Goal Setting Screen
  const GoalSettingScreen = () => (
    <div style={{
      height: '100%',
      background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 100%)',
      padding: '60px 24px 40px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h2 style={{
        color: '#fff',
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '8px'
      }}>
        Set Your Goal
      </h2>
      <p style={{
        color: 'rgba(255,255,255,0.6)',
        fontSize: '14px',
        marginBottom: '24px'
      }}>
        Let's set a realistic, achievable target
      </p>

      {/* Weight slider visualization */}
      <GlassCard style={{ marginBottom: '24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Current</p>
            <p style={{ color: '#fff', fontSize: '24px', fontWeight: '600' }}>75 kg</p>
          </div>
          <div style={{ fontSize: '24px', color: 'rgba(255,255,255,0.3)' }}>→</div>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Target</p>
            <p style={{
              fontSize: '24px',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #00D9FF, #00FF94)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>68 kg</p>
          </div>
        </div>

        <div style={{
          width: '100%',
          height: '8px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '4px',
          position: 'relative',
          marginBottom: '8px'
        }}>
          <div style={{
            width: '70%',
            height: '100%',
            background: 'linear-gradient(90deg, #00D9FF, #00FF94)',
            borderRadius: '4px'
          }} />
        </div>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
          -7 kg to lose
        </p>
      </GlassCard>

      {/* AI Reality Check */}
      <GlassCard style={{
        marginBottom: '24px',
        background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(0, 255, 148, 0.1) 100%)',
        border: '1px solid rgba(0, 217, 255, 0.3)'
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <span style={{ fontSize: '24px' }}>🤖</span>
          <div>
            <p style={{ color: '#00D9FF', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
              AI Reality Check
            </p>
            <p style={{ color: '#fff', fontSize: '14px', lineHeight: '1.5', marginBottom: '12px' }}>
              Losing 7kg is achievable in <strong>3-4 months</strong> with consistent effort. This means:
            </p>
            <ul style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: '1.8', paddingLeft: '16px', margin: 0 }}>
              <li>~500 calorie daily deficit</li>
              <li>0.5-0.75 kg loss per week</li>
              <li>Sustainable, no crash dieting</li>
            </ul>
          </div>
        </div>
      </GlassCard>

      <GlassCard style={{ marginBottom: '24px' }}>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginBottom: '8px' }}>
          Estimated completion
        </p>
        <p style={{ color: '#fff', fontSize: '20px', fontWeight: '600' }}>
          📅 Mid-May 2026
        </p>
      </GlassCard>

      <div style={{ marginTop: 'auto' }}>
        <GradientButton onClick={() => navigateTo(5)}>
          Let's Do This!
        </GradientButton>
      </div>
    </div>
  );

  // Dashboard Screen
  const DashboardScreen = () => (
    <div style={{
      height: '100%',
      background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 100%)',
      padding: '60px 24px 100px',
      overflow: 'auto'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>Good morning</p>
          <p style={{ color: '#fff', fontSize: '24px', fontWeight: '600' }}>Igor 👋</p>
        </div>
        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '22px',
          background: 'linear-gradient(135deg, #00D9FF 0%, #00FF94 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px'
        }}>
          🔥
        </div>
      </div>

      {/* Daily Progress Card */}
      <GlassCard style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <p style={{ color: '#fff', fontSize: '16px', fontWeight: '600' }}>Today's Calories</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>1,680 remaining</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ position: 'relative' }}>
            <ProgressRing progress={45} size={100} strokeWidth={10} />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) rotate(90deg)',
              textAlign: 'center'
            }}>
              <p style={{ color: '#fff', fontSize: '20px', fontWeight: '700' }}>820</p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px' }}>eaten</p>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>Protein</span>
              <span style={{ color: '#00D9FF', fontSize: '12px' }}>45g / 120g</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>Carbs</span>
              <span style={{ color: '#00FF94', fontSize: '12px' }}>78g / 180g</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>Fat</span>
              <span style={{ color: '#FFB800', fontSize: '12px' }}>32g / 65g</span>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Quick Stats */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        <GlassCard style={{ flex: 1, padding: '16px', textAlign: 'center' }}>
          <p style={{ fontSize: '24px', marginBottom: '4px' }}>🚶</p>
          <p style={{ color: '#fff', fontSize: '18px', fontWeight: '600' }}>6,240</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>steps</p>
        </GlassCard>
        <GlassCard style={{ flex: 1, padding: '16px', textAlign: 'center' }}>
          <p style={{ fontSize: '24px', marginBottom: '4px' }}>🔥</p>
          <p style={{ color: '#fff', fontSize: '18px', fontWeight: '600' }}>324</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>active cal</p>
        </GlassCard>
        <GlassCard style={{ flex: 1, padding: '16px', textAlign: 'center' }}>
          <p style={{ fontSize: '24px', marginBottom: '4px' }}>😴</p>
          <p style={{ color: '#fff', fontSize: '18px', fontWeight: '600' }}>7.2h</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>sleep</p>
        </GlassCard>
      </div>

      {/* AI Insight */}
      <GlassCard style={{
        background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.15) 0%, rgba(0, 255, 148, 0.15) 100%)',
        border: '1px solid rgba(0, 217, 255, 0.3)',
        marginBottom: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <span style={{ fontSize: '20px' }}>💡</span>
          <div>
            <p style={{ color: '#00D9FF', fontSize: '13px', fontWeight: '600', marginBottom: '4px' }}>
              AI Coach Tip
            </p>
            <p style={{ color: '#fff', fontSize: '14px', lineHeight: '1.4' }}>
              You're doing great! Try adding a protein-rich snack before dinner to hit your protein goal.
            </p>
          </div>
        </div>
      </GlassCard>

      {/* Today's Meals */}
      <p style={{ color: '#fff', fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Today's Meals</p>

      <GlassCard style={{ marginBottom: '12px', padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #FFB800 0%, #FF6B00 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px'
          }}>🥣</div>
          <div style={{ flex: 1 }}>
            <p style={{ color: '#fff', fontSize: '14px', fontWeight: '500' }}>Breakfast</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Oatmeal with berries</p>
          </div>
          <p style={{ color: '#00FF94', fontSize: '16px', fontWeight: '600' }}>320 cal</p>
        </div>
      </GlassCard>

      <GlassCard style={{ marginBottom: '12px', padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #00D9FF 0%, #00FF94 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px'
          }}>🥗</div>
          <div style={{ flex: 1 }}>
            <p style={{ color: '#fff', fontSize: '14px', fontWeight: '500' }}>Lunch</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Chicken salad</p>
          </div>
          <p style={{ color: '#00FF94', fontSize: '16px', fontWeight: '600' }}>500 cal</p>
        </div>
      </GlassCard>

      {/* Bottom Nav */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '85px',
        background: 'rgba(10, 10, 26, 0.9)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: '20px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '20px' }}>🏠</span>
          <p style={{ color: '#00D9FF', fontSize: '10px', marginTop: '4px' }}>Home</p>
        </div>
        <div style={{ textAlign: 'center' }} onClick={() => navigateTo(8)}>
          <span style={{ fontSize: '20px' }}>📊</span>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px', marginTop: '4px' }}>Progress</p>
        </div>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '30px',
          background: 'linear-gradient(135deg, #00D9FF 0%, #00FF94 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '-30px',
          boxShadow: '0 4px 20px rgba(0, 217, 255, 0.4)',
          cursor: 'pointer'
        }} onClick={() => navigateTo(6)}>
          <span style={{ fontSize: '28px' }}>📷</span>
        </div>
        <div style={{ textAlign: 'center' }} onClick={() => navigateTo(9)}>
          <span style={{ fontSize: '20px' }}>🤖</span>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px', marginTop: '4px' }}>Coach</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '20px' }}>⚙️</span>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px', marginTop: '4px' }}>Settings</p>
        </div>
      </div>
    </div>
  );

  // Food Capture Screen
  const FoodCaptureScreen = () => (
    <div style={{
      height: '100%',
      background: '#000',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Camera viewfinder simulation */}
      <div style={{
        flex: 1,
        background: 'linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        {/* Scanning animation overlay */}
        <div style={{
          position: 'absolute',
          width: '280px',
          height: '280px',
          border: '3px solid rgba(0, 217, 255, 0.5)',
          borderRadius: '24px',
          boxShadow: '0 0 40px rgba(0, 217, 255, 0.2)'
        }}>
          {/* Scanning line */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #00D9FF, transparent)',
            animation: 'scan 2s ease-in-out infinite'
          }} />

          {/* Corner markers */}
          <div style={{ position: 'absolute', top: '-3px', left: '-3px', width: '30px', height: '30px', borderTop: '3px solid #00D9FF', borderLeft: '3px solid #00D9FF', borderRadius: '8px 0 0 0' }} />
          <div style={{ position: 'absolute', top: '-3px', right: '-3px', width: '30px', height: '30px', borderTop: '3px solid #00D9FF', borderRight: '3px solid #00D9FF', borderRadius: '0 8px 0 0' }} />
          <div style={{ position: 'absolute', bottom: '-3px', left: '-3px', width: '30px', height: '30px', borderBottom: '3px solid #00D9FF', borderLeft: '3px solid #00D9FF', borderRadius: '0 0 0 8px' }} />
          <div style={{ position: 'absolute', bottom: '-3px', right: '-3px', width: '30px', height: '30px', borderBottom: '3px solid #00D9FF', borderRight: '3px solid #00D9FF', borderRadius: '0 0 8px 0' }} />
        </div>

        {/* Food emoji placeholder */}
        <span style={{ fontSize: '80px', opacity: 0.3 }}>🍽️</span>
      </div>

      {/* Instruction */}
      <div style={{
        background: 'rgba(0, 0, 0, 0.8)',
        padding: '16px',
        textAlign: 'center'
      }}>
        <p style={{ color: '#00D9FF', fontSize: '14px', fontWeight: '500' }}>
          📸 Point camera at your food
        </p>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginTop: '4px' }}>
          AI will automatically detect and analyze
        </p>
      </div>

      {/* Camera controls */}
      <div style={{
        background: 'linear-gradient(180deg, rgba(10, 10, 26, 0.9) 0%, #0a0a1a 100%)',
        padding: '24px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '12px',
          background: 'rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ fontSize: '24px' }}>🖼️</span>
        </div>

        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '40px',
            background: 'linear-gradient(135deg, #00D9FF 0%, #00FF94 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)',
            cursor: 'pointer'
          }}
          onClick={() => navigateTo(7)}
        >
          <div style={{
            width: '65px',
            height: '65px',
            borderRadius: '35px',
            border: '3px solid rgba(0,0,0,0.3)'
          }} />
        </div>

        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '12px',
          background: 'rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }} onClick={() => navigateTo(5)}>
          <span style={{ fontSize: '24px' }}>✕</span>
        </div>
      </div>
    </div>
  );

  // Food Analysis Screen
  const FoodAnalysisScreen = () => (
    <div style={{
      height: '100%',
      background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 100%)',
      padding: '60px 24px 40px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Back button */}
      <div style={{ marginBottom: '16px' }} onClick={() => navigateTo(5)}>
        <span style={{ color: '#00D9FF', fontSize: '16px', cursor: 'pointer' }}>← Back</span>
      </div>

      {/* Food image preview */}
      <div style={{
        width: '100%',
        height: '200px',
        borderRadius: '24px',
        background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <span style={{ fontSize: '64px' }}>🥗</span>
        <div style={{
          position: 'absolute',
          bottom: '12px',
          right: '12px',
          background: 'rgba(0, 217, 255, 0.9)',
          padding: '6px 12px',
          borderRadius: '8px'
        }}>
          <span style={{ color: '#000', fontSize: '12px', fontWeight: '600' }}>✓ Analyzed</span>
        </div>
      </div>

      {/* Detection result */}
      <GlassCard style={{ marginBottom: '16px' }}>
        <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>
          Grilled Chicken Salad
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '16px' }}>
          Detected: chicken breast, mixed greens, tomatoes, cucumber, olive oil dressing
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '16px 0',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontSize: '28px',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #00D9FF, #00FF94)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>485</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>calories</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#00D9FF', fontSize: '28px', fontWeight: '700' }}>42g</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>protein</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#00FF94', fontSize: '28px', fontWeight: '700' }}>18g</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>carbs</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#FFB800', fontSize: '28px', fontWeight: '700' }}>24g</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>fat</p>
          </div>
        </div>
      </GlassCard>

      {/* Confidence indicator */}
      <GlassCard style={{ marginBottom: '16px', padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>AI Confidence</span>
          <span style={{ color: '#00FF94', fontSize: '13px', fontWeight: '600' }}>High (92%)</span>
        </div>
        <div style={{
          width: '100%',
          height: '6px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '3px',
          marginTop: '8px'
        }}>
          <div style={{
            width: '92%',
            height: '100%',
            background: 'linear-gradient(90deg, #00D9FF, #00FF94)',
            borderRadius: '3px'
          }} />
        </div>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', marginTop: '8px' }}>
          Range: 450-520 calories
        </p>
      </GlassCard>

      {/* Edit option */}
      <button style={{
        background: 'none',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '12px',
        padding: '12px',
        color: 'rgba(255,255,255,0.6)',
        fontSize: '14px',
        marginBottom: '16px',
        cursor: 'pointer'
      }}>
        ✏️ Edit detection
      </button>

      <div style={{ marginTop: 'auto' }}>
        <GradientButton onClick={() => navigateTo(5)}>
          Log This Meal
        </GradientButton>
      </div>
    </div>
  );

  // Progress Screen
  const ProgressScreen = () => (
    <div style={{
      height: '100%',
      background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 100%)',
      padding: '60px 24px 40px',
      overflow: 'auto'
    }}>
      <h2 style={{
        color: '#fff',
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '24px'
      }}>
        Your Progress
      </h2>

      {/* Weight chart */}
      <GlassCard style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <p style={{ color: '#fff', fontSize: '16px', fontWeight: '500' }}>Weight Trend</p>
          <select style={{
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            borderRadius: '8px',
            padding: '6px 12px',
            color: '#fff',
            fontSize: '12px'
          }}>
            <option>Last 30 days</option>
          </select>
        </div>

        {/* Simple chart visualization */}
        <div style={{ height: '120px', position: 'relative', marginBottom: '8px' }}>
          <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00D9FF" />
                <stop offset="100%" stopColor="#00FF94" />
              </linearGradient>
              <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(0, 217, 255, 0.3)" />
                <stop offset="100%" stopColor="rgba(0, 217, 255, 0)" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 Q50,55 100,50 T200,35 T300,25"
              fill="none"
              stroke="url(#chartGrad)"
              strokeWidth="3"
            />
            <path
              d="M0,60 Q50,55 100,50 T200,35 T300,25 L300,100 L0,100 Z"
              fill="url(#areaGrad)"
            />
          </svg>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>Started</p>
            <p style={{ color: '#fff', fontSize: '16px', fontWeight: '600' }}>75.0 kg</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>Current</p>
            <p style={{
              fontSize: '16px',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #00D9FF, #00FF94)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>72.3 kg</p>
          </div>
        </div>
      </GlassCard>

      {/* Stats grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <GlassCard style={{ padding: '16px', textAlign: 'center' }}>
          <p style={{ color: '#00FF94', fontSize: '28px', fontWeight: '700' }}>-2.7kg</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Total lost</p>
        </GlassCard>
        <GlassCard style={{ padding: '16px', textAlign: 'center' }}>
          <p style={{ color: '#00D9FF', fontSize: '28px', fontWeight: '700' }}>4.3kg</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>To goal</p>
        </GlassCard>
        <GlassCard style={{ padding: '16px', textAlign: 'center' }}>
          <p style={{ color: '#FFB800', fontSize: '28px', fontWeight: '700' }}>21</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Day streak</p>
        </GlassCard>
        <GlassCard style={{ padding: '16px', textAlign: 'center' }}>
          <p style={{ color: '#FF6B00', fontSize: '28px', fontWeight: '700' }}>89%</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Consistency</p>
        </GlassCard>
      </div>

      {/* Body comparison */}
      <GlassCard>
        <p style={{ color: '#fff', fontSize: '16px', fontWeight: '500', marginBottom: '16px' }}>Body Progress</p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{
              height: '100px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '8px'
            }}>
              <span style={{ fontSize: '40px', opacity: 0.5 }}>🧍</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>Day 1</p>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{
              height: '100px',
              background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(0, 255, 148, 0.1) 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '8px',
              border: '1px solid rgba(0, 217, 255, 0.3)'
            }}>
              <span style={{ fontSize: '40px' }}>🧍</span>
            </div>
            <p style={{ color: '#00D9FF', fontSize: '11px' }}>Today</p>
          </div>
        </div>
      </GlassCard>

      <div style={{ marginTop: '24px' }} onClick={() => navigateTo(5)}>
        <GradientButton secondary>Back to Dashboard</GradientButton>
      </div>
    </div>
  );

  // AI Coaching Screen
  const CoachingScreen = () => (
    <div style={{
      height: '100%',
      background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 100%)',
      padding: '60px 24px 40px',
      overflow: 'auto'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '25px',
          background: 'linear-gradient(135deg, #00D9FF 0%, #00FF94 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ fontSize: '24px' }}>🤖</span>
        </div>
        <div>
          <h2 style={{ color: '#fff', fontSize: '20px', fontWeight: '600' }}>AI Coach</h2>
          <p style={{ color: '#00FF94', fontSize: '12px' }}>● Online</p>
        </div>
      </div>

      {/* Proactive insights */}
      <GlassCard style={{
        marginBottom: '16px',
        background: 'linear-gradient(135deg, rgba(255, 107, 0, 0.15) 0%, rgba(255, 184, 0, 0.15) 100%)',
        border: '1px solid rgba(255, 184, 0, 0.3)'
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <span style={{ fontSize: '24px' }}>⚠️</span>
          <div>
            <p style={{ color: '#FFB800', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
              Weekend Pattern Detected
            </p>
            <p style={{ color: '#fff', fontSize: '14px', lineHeight: '1.5' }}>
              I've noticed you tend to exceed your calories on Saturdays. Let's plan ahead this weekend—want me to suggest a strategy?
            </p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
              <button style={{
                background: 'rgba(255, 184, 0, 0.2)',
                border: '1px solid rgba(255, 184, 0, 0.5)',
                borderRadius: '8px',
                padding: '8px 16px',
                color: '#FFB800',
                fontSize: '13px',
                cursor: 'pointer'
              }}>Yes, help me</button>
              <button style={{
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 16px',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '13px',
                cursor: 'pointer'
              }}>Dismiss</button>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Behavior insights */}
      <p style={{ color: '#fff', fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Behavior Insights</p>

      <GlassCard style={{ marginBottom: '12px', padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '24px' }}>🌙</span>
          <div style={{ flex: 1 }}>
            <p style={{ color: '#fff', fontSize: '14px', fontWeight: '500' }}>Late Night Eating</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>3 times this week after 9pm</p>
          </div>
          <div style={{
            padding: '4px 8px',
            background: 'rgba(255, 107, 0, 0.2)',
            borderRadius: '6px'
          }}>
            <span style={{ color: '#FF6B00', fontSize: '11px' }}>Watch</span>
          </div>
        </div>
      </GlassCard>

      <GlassCard style={{ marginBottom: '12px', padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '24px' }}>💧</span>
          <div style={{ flex: 1 }}>
            <p style={{ color: '#fff', fontSize: '14px', fontWeight: '500' }}>Hydration</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Consistently below target</p>
          </div>
          <div style={{
            padding: '4px 8px',
            background: 'rgba(255, 184, 0, 0.2)',
            borderRadius: '6px'
          }}>
            <span style={{ color: '#FFB800', fontSize: '11px' }}>Improve</span>
          </div>
        </div>
      </GlassCard>

      <GlassCard style={{ marginBottom: '12px', padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '24px' }}>🥗</span>
          <div style={{ flex: 1 }}>
            <p style={{ color: '#fff', fontSize: '14px', fontWeight: '500' }}>Vegetable Intake</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Great variety this week!</p>
          </div>
          <div style={{
            padding: '4px 8px',
            background: 'rgba(0, 255, 148, 0.2)',
            borderRadius: '6px'
          }}>
            <span style={{ color: '#00FF94', fontSize: '11px' }}>Great</span>
          </div>
        </div>
      </GlassCard>

      <div style={{ marginTop: '24px' }} onClick={() => navigateTo(10)}>
        <GradientButton>Weekly Check-in</GradientButton>
      </div>
    </div>
  );

  // Weekly Check-in Screen
  const WeeklyCheckinScreen = () => (
    <div style={{
      height: '100%',
      background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 100%)',
      padding: '60px 24px 40px',
      overflow: 'auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <span style={{ fontSize: '48px' }}>📊</span>
        <h2 style={{
          color: '#fff',
          fontSize: '24px',
          fontWeight: '600',
          marginTop: '12px'
        }}>
          Weekly Review
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>Week of Jan 20-26, 2026</p>
      </div>

      {/* Week summary */}
      <GlassCard style={{
        marginBottom: '16px',
        background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.15) 0%, rgba(0, 255, 148, 0.15) 100%)',
        border: '1px solid rgba(0, 217, 255, 0.3)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontSize: '48px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #00D9FF, #00FF94)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '8px'
          }}>-0.6 kg</p>
          <p style={{ color: '#fff', fontSize: '16px' }}>Lost this week 🎉</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginTop: '8px' }}>
            You're on track! Keep this pace for 7 more weeks.
          </p>
        </div>
      </GlassCard>

      {/* Weekly stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '16px' }}>
        <GlassCard style={{ padding: '12px', textAlign: 'center' }}>
          <p style={{ color: '#00FF94', fontSize: '18px', fontWeight: '600' }}>5/7</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px' }}>Days on target</p>
        </GlassCard>
        <GlassCard style={{ padding: '12px', textAlign: 'center' }}>
          <p style={{ color: '#00D9FF', fontSize: '18px', fontWeight: '600' }}>1,680</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px' }}>Avg calories</p>
        </GlassCard>
        <GlassCard style={{ padding: '12px', textAlign: 'center' }}>
          <p style={{ color: '#FFB800', fontSize: '18px', fontWeight: '600' }}>52k</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px' }}>Total steps</p>
        </GlassCard>
      </div>

      {/* AI feedback */}
      <GlassCard style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <span style={{ fontSize: '24px' }}>🤖</span>
          <div>
            <p style={{ color: '#00D9FF', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
              Coach's Feedback
            </p>
            <p style={{ color: '#fff', fontSize: '14px', lineHeight: '1.6' }}>
              Great consistency this week, Igor! Your protein intake improved significantly.
              For next week, let's focus on:
            </p>
            <ul style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', lineHeight: '1.8', paddingLeft: '16px', marginTop: '8px' }}>
              <li>Hitting your step goal on Wednesday</li>
              <li>Planning ahead for the weekend</li>
              <li>Adding more fiber to your meals</li>
            </ul>
          </div>
        </div>
      </GlassCard>

      {/* Motivation message */}
      <GlassCard style={{
        background: 'linear-gradient(135deg, rgba(255, 184, 0, 0.1) 0%, rgba(255, 107, 0, 0.1) 100%)',
        border: '1px solid rgba(255, 184, 0, 0.2)'
      }}>
        <p style={{ color: '#FFB800', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
          💪 Motivation
        </p>
        <p style={{ color: '#fff', fontSize: '14px', fontStyle: 'italic' }}>
          "You've now lost more than the first 3 lbs—the hardest part! Your body is adapting and it gets easier from here."
        </p>
      </GlassCard>

      <div style={{ marginTop: '24px' }} onClick={() => navigateTo(5)}>
        <GradientButton>Continue to Dashboard</GradientButton>
      </div>
    </div>
  );

  // Subscription Screen
  const SubscriptionScreen = () => (
    <div style={{
      height: '100%',
      background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 100%)',
      padding: '60px 24px 40px',
      overflow: 'auto'
    }}>
      <h2 style={{
        color: '#fff',
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '8px',
        textAlign: 'center'
      }}>
        Unlock Your Potential
      </h2>
      <p style={{
        color: 'rgba(255,255,255,0.6)',
        fontSize: '14px',
        textAlign: 'center',
        marginBottom: '24px'
      }}>
        Choose the plan that fits your goals
      </p>

      {/* Basic plan */}
      <GlassCard style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <p style={{ color: '#fff', fontSize: '18px', fontWeight: '600' }}>Basic</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>Essential tracking</p>
          </div>
          <p style={{ color: '#fff', fontSize: '24px', fontWeight: '700' }}>Free</p>
        </div>
        <ul style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: '2', paddingLeft: '16px' }}>
          <li>Food photo → calorie estimation</li>
          <li>Daily calorie budget</li>
          <li>Basic progress tracking</li>
        </ul>
        <GradientButton secondary style={{ marginTop: '16px' }}>
          Current Plan
        </GradientButton>
      </GlassCard>

      {/* Pro plan */}
      <GlassCard style={{
        background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.15) 0%, rgba(0, 255, 148, 0.15) 100%)',
        border: '2px solid rgba(0, 217, 255, 0.5)',
        position: 'relative',
        overflow: 'visible'
      }}>
        <div style={{
          position: 'absolute',
          top: '-12px',
          right: '16px',
          background: 'linear-gradient(135deg, #00D9FF 0%, #00FF94 100%)',
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '11px',
          fontWeight: '600',
          color: '#0a0a1a'
        }}>
          RECOMMENDED
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <p style={{ color: '#fff', fontSize: '18px', fontWeight: '600' }}>Pro</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>Full AI coaching</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{
              fontSize: '24px',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #00D9FF, #00FF94)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>€12.99</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>/month</p>
          </div>
        </div>

        <ul style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', lineHeight: '2', paddingLeft: '16px' }}>
          <li>✓ Everything in Basic</li>
          <li>✓ Full body analysis & goal realism</li>
          <li>✓ Proactive AI coaching & motivation</li>
          <li>✓ Macro analysis & habit detection</li>
          <li>✓ Smartwatch integration</li>
          <li>✓ Weekly AI coach check-ins</li>
        </ul>

        <GradientButton style={{ marginTop: '16px' }} onClick={() => navigateTo(0)}>
          Start 7-Day Free Trial
        </GradientButton>

        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', textAlign: 'center', marginTop: '12px' }}>
          Cancel anytime. No commitment.
        </p>
      </GlassCard>
    </div>
  );

  // Render current screen
  const renderScreen = () => {
    switch (screens[currentScreen]) {
      case 'welcome': return <WelcomeScreen />;
      case 'onboarding-basics': return <OnboardingBasicsScreen />;
      case 'body-photo': return <BodyPhotoScreen />;
      case 'body-analysis': return <BodyAnalysisScreen />;
      case 'goal-setting': return <GoalSettingScreen />;
      case 'dashboard': return <DashboardScreen />;
      case 'food-capture': return <FoodCaptureScreen />;
      case 'food-analysis': return <FoodAnalysisScreen />;
      case 'progress': return <ProgressScreen />;
      case 'coaching': return <CoachingScreen />;
      case 'weekly-checkin': return <WeeklyCheckinScreen />;
      case 'subscription': return <SubscriptionScreen />;
      default: return <WelcomeScreen />;
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3a 50%, #0f0f23 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        @keyframes scan {
          0%, 100% { top: 0; }
          50% { top: calc(100% - 3px); }
        }
      `}</style>

      {/* Screen navigation */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '32px',
        justifyContent: 'center',
        maxWidth: '600px'
      }}>
        {screenNames.map((name, index) => (
          <button
            key={index}
            onClick={() => navigateTo(index)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: 'none',
              background: currentScreen === index
                ? 'linear-gradient(135deg, #00D9FF 0%, #00FF94 100%)'
                : 'rgba(255,255,255,0.1)',
              color: currentScreen === index ? '#0a0a1a' : '#fff',
              fontSize: '12px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Phone mockup */}
      <div style={{
        opacity: animating ? 0 : 1,
        transform: animating ? 'scale(0.95)' : 'scale(1)',
        transition: 'all 0.3s ease'
      }}>
        <PhoneFrame>
          {renderScreen()}
        </PhoneFrame>
      </div>

      {/* Screen counter */}
      <div style={{
        marginTop: '24px',
        color: 'rgba(255,255,255,0.4)',
        fontSize: '14px'
      }}>
        Screen {currentScreen + 1} of {screens.length}
      </div>
    </div>
  );
};

export default AIWeightCoachMockups;