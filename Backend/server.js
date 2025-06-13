import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5173; // Using fixed port for certainty

// 1. Essential Middleware
app.use(cors());
app.use(express.json());

// 2. Simple Product Data
const products = [
  {
    id: '1',
    name: 'Classic Shirt',
    price: 1999
  },
  {
    id: '2',
    name: 'Summer T-Shirt',
    price: 1499
  }
];

// 3. Verified Route - EXACTLY matches your request
app.get('/api/products', (req, res) => {
  console.log('✅ Request received at /api/products');
  res.json({ 
    success: true,
    data: products 
  });
});

// 4. Start Server with Verification
const server = app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`🔹 Test endpoint: http://localhost:${PORT}/api/products\n`);
});

// 5. Handle server errors
server.on('error', (err) => {
  console.error('❌ Server error:', err);
});