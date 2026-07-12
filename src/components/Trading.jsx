import React, { useState } from 'react';
import { Box, Typography, Container, Tabs, Tab } from '@mui/material';

const TradingTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', mt: 6 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'rgba(126, 240, 209, 0.2)', mb: 4 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{
            '& .MuiTab-root': {
              color: '#e6f0ff',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              minWidth: 120,
              '&:hover': {
                color: '#7ef0d1'
              }
            },
            '& .Mui-selected': {
              color: '#7ef0d1 !important'
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#7ef0d1',
              height: 3
            }
          }}
        >
          <Tab label="My Analysis" />
          <Tab label="Profit Card" />
          <Tab label="Bot Trading" />
        </Tabs>
      </Box>

      {/* My Analysis Tab */}
      {value === 0 && (
        <Box sx={{ py: 3 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: 3,
              maxWidth: '1000px',
              mx: 'auto',
              px: 2
            }}
          >
            {/* Analysis Images - 2 per row */}
            {[
              '/acard/WhatsApp Image 2025-11-28 at 14.17.19_39c3ce48.jpg',
              '/acard/WhatsApp Image 2025-11-28 at 14.17.20_e0766fd6.jpg',
              '/acard/WhatsApp Image 2025-11-28 at 14.20.14_786e9cd0.jpg',
              '/acard/WhatsApp Image 2025-11-28 at 14.20.15_1a517b79.jpg',
              '/acard/WhatsApp Image 2025-11-28 at 14.20.17_1e326835.jpg',
              '/acard/WhatsApp Image 2025-11-28 at 14.20.17_5a09c956.jpg'
            ].map((image, index) => (
              <Box key={index}>
                <Box
                  sx={{
                    backgroundColor: 'rgba(30, 50, 100, 0.85)',
                    borderRadius: '16px',
                    p: 2,
                    border: '1px solid rgba(126, 240, 209, 0.3)',
                    boxShadow: '0 8px 32px rgba(126, 240, 209, 0.15)',
                    transition: 'all 0.3s ease',
                    height: 'fit-content',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 40px rgba(126, 240, 209, 0.2)',
                      border: '1px solid rgba(126, 240, 209, 0.5)'
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={image}
                    alt={`Analysis ${index + 1}`}
                    sx={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      display: 'block'
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* Profit Card Tab */}
      {value === 1 && (
        <Box sx={{ py: 3 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: 3,
              maxWidth: '1200px',
              mx: 'auto',
              px: 2
            }}
          >
            {/* Profit Card Images - 3 per row */}
            {[
              '/prcard/IMG-20251128-WA0016.jpg',
              '/prcard/IMG-20251128-WA0017.jpg',
              '/prcard/IMG-20251128-WA0018.jpg',
              '/prcard/IMG-20251128-WA0019.jpg',
              '/prcard/IMG-20251128-WA0020.jpg',
              '/prcard/IMG-20251128-WA0021.jpg'
            ].map((image, index) => (
              <Box key={index}>
                <Box
                  sx={{
                    backgroundColor: 'rgba(30, 50, 100, 0.85)',
                    borderRadius: '16px',
                    p: 2,
                    border: '1px solid rgba(126, 240, 209, 0.3)',
                    boxShadow: '0 8px 32px rgba(126, 240, 209, 0.15)',
                    transition: 'all 0.3s ease',
                    height: 'fit-content',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 40px rgba(126, 240, 209, 0.2)',
                      border: '1px solid rgba(126, 240, 209, 0.5)'
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={image}
                    alt={`Profit Card ${index + 1}`}
                    sx={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      display: 'block'
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* Bot Trading Tab */}
      {value === 2 && (
        <Box sx={{ py: 3 }}>
          <Box sx={{ maxWidth: '1000px', mx: 'auto', px: 2, display: 'flex', flexDirection: 'column', gap: 4 }}>

            {/* Header Card */}
            <Box sx={{
              background: 'linear-gradient(135deg, rgba(20,30,70,0.95) 0%, rgba(40,20,80,0.95) 100%)',
              borderRadius: '20px',
              p: 4,
              border: '1px solid rgba(126, 240, 209, 0.4)',
              boxShadow: '0 8px 32px rgba(126, 240, 209, 0.15)',
              textAlign: 'center'
            }}>
              <Typography sx={{ fontSize: '2rem', mb: 1 }}>🤖</Typography>
              <Typography variant="h5" sx={{ color: '#7ef0d1', fontWeight: 700, mb: 1 }}>
                Crypto Trade Engine
              </Typography>
              <Typography sx={{ color: '#9bb5d1', fontSize: '0.95rem', lineHeight: 1.7, mb: 2 }}>
                Automated trading engine for Polymarket binary prediction markets with an integrated strategy test harness.
                Supports short-window markets (5-minute and 15-minute) across major crypto assets.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', mb: 2 }}>
                {['TypeScript', 'Node.js', 'WebSocket', 'REST API', 'CLOB'].map((tag, i) => (
                  <Box key={i} sx={{
                    px: 2, py: 0.5,
                    border: '1px solid rgba(126, 240, 209, 0.4)',
                    borderRadius: '20px',
                    color: '#7ef0d1',
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}>{tag}</Box>
                ))}
              </Box>
            </Box>

            {/* Supported Markets */}
            <Box sx={{
              backgroundColor: 'rgba(30, 50, 100, 0.85)',
              borderRadius: '16px', p: 3,
              border: '1px solid rgba(126, 240, 209, 0.2)'
            }}>
              <Typography sx={{ color: '#7ef0d1', fontWeight: 700, fontSize: '1.1rem', mb: 2, textAlign: 'center' }}>
                📊 Supported Markets
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                {[
                  { asset: 'BTC', icon: '₿' },
                  { asset: 'ETH', icon: 'Ξ' },
                  { asset: 'XRP', icon: '✕' },
                  { asset: 'SOL', icon: '◎' },
                  { asset: 'DOGE', icon: '🐕' },
                ].map((m, i) => (
                  <Box key={i} sx={{
                    p: 2, borderRadius: '12px', textAlign: 'center',
                    background: 'rgba(126, 240, 209, 0.06)',
                    border: '1px solid rgba(126, 240, 209, 0.15)'
                  }}>
                    <Typography sx={{ fontSize: '1.5rem' }}>{m.icon}</Typography>
                    <Typography sx={{ color: '#e6f0ff', fontWeight: 700, fontSize: '1rem' }}>{m.asset}</Typography>
                    <Typography sx={{ color: '#9bb5d1', fontSize: '0.75rem' }}>5-min / 15-min</Typography>
                    <Typography sx={{ color: '#7ef0d1', fontSize: '0.7rem' }}>Binary Up/Down</Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Indicators */}
            <Typography sx={{ color: '#e6f0ff', fontWeight: 700, fontSize: '1.2rem', textAlign: 'center' }}>
              ⚡ Trading Indicators
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>

              {/* RSI */}
              <Box sx={{
                backgroundColor: 'rgba(30, 50, 100, 0.85)', borderRadius: '16px', p: 3,
                border: '1px solid rgba(126, 240, 209, 0.2)',
                textAlign: 'center',
                transition: 'all 0.3s', '&:hover': { transform: 'translateY(-4px)', borderColor: 'rgba(126,240,209,0.5)' }
              }}>
                <Typography sx={{ color: '#7ef0d1', fontWeight: 700, fontSize: '1.05rem', mb: 1 }}>📈 RSI — Relative Strength Index</Typography>
                <Typography sx={{ color: '#9bb5d1', fontSize: '0.85rem', lineHeight: 1.7, mb: 2 }}>
                  Measures momentum of the BTC price gap using Wilder's smoothing over 14-second periods.
                  Updates every fixed 1-second interval. Direction-aware signal.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
                  {[
                    { label: '> 70 (UP trend)', color: '#4ade80', desc: 'RSI confirms momentum' },
                    { label: '< 30 (DOWN trend)', color: '#f87171', desc: 'Sustained reversal signal' },
                    { label: '30–70 (neutral)', color: '#facc15', desc: 'No clear trend, oscillating' },
                  ].map((r, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: r.color, flexShrink: 0 }} />
                      <Typography sx={{ color: r.color, fontSize: '0.78rem', fontWeight: 600 }}>{r.label}</Typography>
                      <Typography sx={{ color: '#9bb5d1', fontSize: '0.75rem' }}>— {r.desc}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* ATR */}
              <Box sx={{
                backgroundColor: 'rgba(30, 50, 100, 0.85)', borderRadius: '16px', p: 3,
                border: '1px solid rgba(126, 240, 209, 0.2)',
                textAlign: 'center',
                transition: 'all 0.3s', '&:hover': { transform: 'translateY(-4px)', borderColor: 'rgba(126,240,209,0.5)' }
              }}>
                <Typography sx={{ color: '#c77dff', fontWeight: 700, fontSize: '1.05rem', mb: 1 }}>🌊 ATR — Average True Range</Typography>
                <Typography sx={{ color: '#9bb5d1', fontSize: '0.85rem', lineHeight: 1.7, mb: 2 }}>
                  Measures per-second BTC volatility via Wilder's smoothing. Shows <strong style={{ color: '#7ef0d1' }}>Safety Ratio</strong> = gap / ATR
                  — how many average moves to close the gap.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
                  {[
                    { label: '> 10x Safety', color: '#4ade80', desc: 'Very safe' },
                    { label: '3–10x Safety', color: '#7ef0d1', desc: 'Moderate' },
                    { label: '1–3x Safety', color: '#facc15', desc: 'Risky' },
                    { label: '< 1x Safety', color: '#f87171', desc: 'Dangerous — within noise' },
                  ].map((r, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: r.color, flexShrink: 0 }} />
                      <Typography sx={{ color: r.color, fontSize: '0.78rem', fontWeight: 600 }}>{r.label}</Typography>
                      <Typography sx={{ color: '#9bb5d1', fontSize: '0.75rem' }}>— {r.desc}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* RTV */}
              <Box sx={{
                backgroundColor: 'rgba(30, 50, 100, 0.85)', borderRadius: '16px', p: 3,
                border: '1px solid rgba(126, 240, 209, 0.2)',
                textAlign: 'center',
                transition: 'all 0.3s', '&:hover': { transform: 'translateY(-4px)', borderColor: 'rgba(126,240,209,0.5)' }
              }}>
                <Typography sx={{ color: '#60a5fa', fontWeight: 700, fontSize: '1.05rem', mb: 1 }}>🎲 RTV — Rolling Tick Volatility</Typography>
                <Typography sx={{ color: '#9bb5d1', fontSize: '0.85rem', lineHeight: 1.7, mb: 2 }}>
                  Rolling 30-second mean of absolute BTC tick changes. Faster & more reactive than ATR — no smoothing bias.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
                  {[
                    { label: '< $1', color: '#4ade80', desc: 'Very quiet market' },
                    { label: '$1–5', color: '#7ef0d1', desc: 'Normal activity' },
                    { label: '> $5', color: '#f87171', desc: 'Choppy — gap less predictable' },
                  ].map((r, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: r.color, flexShrink: 0 }} />
                      <Typography sx={{ color: r.color, fontSize: '0.78rem', fontWeight: 600 }}>{r.label}</Typography>
                      <Typography sx={{ color: '#9bb5d1', fontSize: '0.75rem' }}>— {r.desc}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* PGR */}
              <Box sx={{
                backgroundColor: 'rgba(30, 50, 100, 0.85)', borderRadius: '16px', p: 3,
                border: '1px solid rgba(126, 240, 209, 0.2)',
                textAlign: 'center',
                transition: 'all 0.3s', '&:hover': { transform: 'translateY(-4px)', borderColor: 'rgba(126,240,209,0.5)' }
              }}>
                <Typography sx={{ color: '#fb923c', fontWeight: 700, fontSize: '1.05rem', mb: 1 }}>🏔️ PGR — Peak Gap Ratio</Typography>
                <Typography sx={{ color: '#9bb5d1', fontSize: '0.85rem', lineHeight: 1.7, mb: 2 }}>
                  Tracks how much of the slot's strongest move remains. Blocks entry if gap faded &gt;25% from peak —
                  signals momentum exhaustion even when other indicators look safe.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
                  {[
                    { label: '0.90–1.00', color: '#4ade80', desc: 'Fresh & strong — full conviction' },
                    { label: '0.75–0.90', color: '#facc15', desc: 'Normal fluctuation — acceptable' },
                    { label: '< 0.75', color: '#f87171', desc: 'Entry BLOCKED — momentum exhausted' },
                  ].map((r, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: r.color, flexShrink: 0 }} />
                      <Typography sx={{ color: r.color, fontSize: '0.78rem', fontWeight: 600 }}>{r.label}</Typography>
                      <Typography sx={{ color: '#9bb5d1', fontSize: '0.75rem' }}>— {r.desc}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Features */}
            <Box sx={{
              backgroundColor: 'rgba(30, 50, 100, 0.85)', borderRadius: '16px', p: 3,
              border: '1px solid rgba(126, 240, 209, 0.2)'
            }}>
              <Typography sx={{ color: '#7ef0d1', fontWeight: 700, fontSize: '1.1rem', mb: 2 }}>⚙️ Key Features</Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.5 }}>
                {[
                  { icon: '🔴', text: 'Live Trading via Polymarket CLOB API' },
                  { icon: '🧪', text: 'Strategy Test Harness & Backtesting' },
                  { icon: '📋', text: 'Order Lifecycle Management' },
                  { icon: '📡', text: 'WebSocket Feed + Market Polling' },
                  { icon: '📊', text: 'Real-time Position Tracking' },
                  { icon: '🛡️', text: 'Risk Controls — size limits, exposure caps' },
                  { icon: '🔌', text: 'Extensible Strategy Interface' },
                  { icon: '📝', text: 'Structured Timestamped Logging' },
                ].map((f, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <Typography sx={{ fontSize: '1rem', flexShrink: 0 }}>{f.icon}</Typography>
                    <Typography sx={{ color: '#e6f0ff', fontSize: '0.85rem', lineHeight: 1.5 }}>{f.text}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Display Example */}
            <Box sx={{
              backgroundColor: 'rgba(10, 15, 40, 0.95)', borderRadius: '12px', p: 3,
              border: '1px solid rgba(126, 240, 209, 0.3)',
              fontFamily: 'monospace',
              textAlign: 'center'
            }}>
              <Typography sx={{ color: '#4ade80', fontSize: '0.75rem', mb: 1, fontWeight: 600 }}>● LIVE INDICATOR DISPLAY</Typography>
              <Typography sx={{ color: '#7ef0d1', fontSize: '0.85rem', letterSpacing: '0.5px' }}>
                Indicators: ATR: $8.23 &nbsp;|&nbsp; Safety: 9.1x &nbsp;|&nbsp; RTV: $3.12 &nbsp;|&nbsp; PGR: 0.85
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.5, mt: 1.5, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Box sx={{ px: 2, py: 0.5, borderRadius: '8px', bgcolor: 'rgba(74,222,128,0.15)', border: '1px solid #4ade80' }}>
                  <Typography sx={{ color: '#4ade80', fontSize: '0.75rem', fontWeight: 600 }}>RSI: Green ▲</Typography>
                </Box>
                <Box sx={{ px: 2, py: 0.5, borderRadius: '8px', bgcolor: 'rgba(250,204,21,0.15)', border: '1px solid #facc15' }}>
                  <Typography sx={{ color: '#facc15', fontSize: '0.75rem', fontWeight: 600 }}>RSI: Yellow ◉</Typography>
                </Box>
                <Box sx={{ px: 2, py: 0.5, borderRadius: '8px', bgcolor: 'rgba(248,113,113,0.15)', border: '1px solid #f87171' }}>
                  <Typography sx={{ color: '#f87171', fontSize: '0.75rem', fontWeight: 600 }}>RSI: Red ▼</Typography>
                </Box>
              </Box>
            </Box>

          </Box>
        </Box>
      )}
    </Box>
  );
};

const Trading = () => {
  return (
    <Box
      id="trading"
      sx={{
        py: 8,
        px: 4,
        background: 'transparent'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 6,
            color: '#fff',
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '3rem' },
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #7ef0d1, #4be0c6)',
              borderRadius: '2px'
            }
          }}
        >
          About My Trading Journey
        </Typography>

        {/* Trading Journey Content */}
        <Box
          sx={{
            maxWidth: '900px',
            mx: 'auto',
            backgroundColor: 'rgba(30, 50, 100, 0.85)',
            borderRadius: '20px',
            p: 6,
            border: '1px solid rgba(126, 240, 209, 0.3)',
            boxShadow: '0 8px 32px rgba(126, 240, 209, 0.15)'
          }}
        >
          <Typography
            sx={{
              color: '#e6f0ff',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              textAlign: 'center',
              fontWeight: 400,
              letterSpacing: '0.3px'
            }}
          >
            I'm an experienced trader with 3+ years in the markets, specializing in Elliott Wave, Neo Wave, and Smart Money Concepts. I combine technical analysis, chart patterns, time-series forecasting, and strong money management to trade and invest across crypto, forex, and stocks. My approach is structured, data-driven, and focused on identifying high-probability market opportunities while managing risk with discipline.
          </Typography>

          {/* Trading Skills Tags */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mt: 4 }}>
            {['Elliott Wave', 'Neo Wave', 'Smart Money Concepts', 'Technical Analysis', 'Chart Patterns', 'Time-Series Forecasting', 'Risk Management', 'Crypto Trading', 'Forex', 'Stock Market', 'SK', 'SMC', 'SNR', 'Fundermental'].map((skill, index) => (
              <Box
                key={index}
                sx={{
                  px: 3,
                  py: 1,
                  backgroundColor: 'transparent',
                  border: '2px solid rgba(126, 240, 209, 0.4)',
                  borderRadius: '25px',
                  color: '#7ef0d1',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  '&:hover': {
                    backgroundColor: 'rgba(126, 240, 209, 0.08)',
                    borderColor: '#7ef0d1',
                    transform: 'scale(1.05)'
                  }
                }}
              >
                {skill}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Trading Tabs */}
        <TradingTabs />
      </Container>
    </Box>
  );
};

export default Trading;
