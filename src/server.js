const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', roomRoutes);
app.use('/api', bookingRoutes);

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
    // console.log(`Server is running on port ${PORT}`);
    console.log(`Server is running on http://localhost:3000`);
    
});
