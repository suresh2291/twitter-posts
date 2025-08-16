# 🐦 Twitter/X Clone - Engagement Analytics App

A modern, responsive web application that displays Twitter/X posts sorted by engagement metrics (likes and reposts) in descending order. Built with React.js and styled to mimic the authentic Twitter/X interface.

![Twitter Clone App](https://img.shields.io/badge/React-18.2.0-blue) ![Twitter Clone App](https://img.shields.io/badge/CSV-Parser-Papaparse-green) ![Twitter Clone App](https://img.shields.io/badge/UI-Twitter%2FX%20Clone-black)

## ✨ Features

### 🎯 Core Functionality
- **Smart Data Sorting**: Sort tweets by likes or reposts in descending order
- **Real-time Analytics**: Display engagement metrics (likes, reposts, replies, views)
- **CSV Data Integration**: Load and parse Twitter data from CSV files
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### 🎨 Authentic Twitter/X UI
- **3-Column Layout**: Left sidebar, main content feed, right sidebar
- **Dark Theme**: Authentic Twitter/X dark color scheme
- **Real Icons**: Uses exact Twitter/X engagement icons (💬, 🔄, ❤️, 👁️, 🔖, ↗️)
- **Tweet Cards**: Professional tweet display with profile images and metadata
- **Navigation Menu**: Complete sidebar navigation matching Twitter/X

### 📊 Data Management
- **CSV Parser**: Robust CSV data handling with error management
- **Data Validation**: Filters and processes malformed data gracefully
- **Performance Optimized**: Efficient rendering of large datasets
- **Error Handling**: Comprehensive error handling for data parsing

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd twitter-posts
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get the Twitter dataset**
   - Download the [Luminati Twitter-X Dataset](https://github.com/luminati-io/Twitter-X-dataset-samples/blob/main/twitter-posts.csv)
   - Place the `twitter-posts.csv` file in the `public/` directory
   - The dataset is already formatted with all required columns

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The app will automatically load and display your Twitter data

## 📁 Project Structure

```
twitter-posts/
├── public/
│   ├── index.html          # Main HTML entry point
│   └── twitter-posts.csv   # Twitter data from Luminati dataset
├── src/
│   ├── App.js             # Main React component
│   ├── App.css            # Styling and layout
│   ├── index.js           # React entry point
│   └── index.css          # Global styles
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 📈 Dataset Information

### Data Source
This application uses the **[Luminati Twitter-X Dataset Samples](https://github.com/luminati-io/Twitter-X-dataset-samples/blob/main/twitter-posts.csv)** which provides:
- **Real Twitter/X Data**: Authentic posts with actual engagement metrics
- **Comprehensive Metrics**: Likes, reposts, replies, views, and follower counts
- **Rich Metadata**: Profile images, hashtags, dates, and user information
- **Large Dataset**: Extensive collection of tweets for robust testing
- **Open Source**: Freely available for educational and development purposes

## 📊 Data Format

This application uses the [Luminati Twitter-X Dataset Samples](https://github.com/luminati-io/Twitter-X-dataset-samples/blob/main/twitter-posts.csv) as the primary data source. The CSV file contains real Twitter/X posts with comprehensive engagement metrics.

Your CSV file should contain the following columns:

| Column | Description | Required | Example |
|--------|-------------|----------|---------|
| `id` | Unique tweet identifier | Yes | `12345` |
| `user_posted` | Twitter username | Yes | `@username` |
| `name` | Display name | Yes | `John Doe` |
| `description` | Tweet content | Yes | `Hello world!` |
| `date_posted` | Tweet date | Yes | `2024-01-15` |
| `likes` | Number of likes | Yes | `1500` |
| `reposts` | Number of reposts/retweets | Yes | `250` |
| `replies` | Number of replies | No | `45` |
| `views` | Number of views | No | `10000` |
| `hashtags` | JSON array of hashtags | No | `["#tech", "#coding"]` |
| `profile_image_link` | Profile image URL | No | `https://...` |
| `followers` | Follower count | No | `5000` |

### Sample CSV Row
```csv
id,user_posted,name,description,date_posted,likes,reposts,replies,views,hashtags,profile_image_link,followers
1,@johndoe,John Doe,"Excited to share my new project! #coding #tech",2024-01-15,1500,250,45,10000,"[""#coding"", ""#tech""]",https://example.com/image.jpg,5000
```

## 🎮 Usage

### Sorting Tweets
1. **Default Sort**: App loads with tweets sorted by likes (highest first)
2. **Change Sort**: Click "Sort by Reposts" to sort by repost count
3. **Visual Feedback**: Active sort button shows blue background
4. **Real-time Updates**: Sorting happens instantly without page refresh

### Navigation
- **Left Sidebar**: Navigate between different sections (Home, Explore, Notifications, etc.)
- **Main Feed**: Scroll through sorted tweets
- **Right Sidebar**: Search functionality and trending topics

### Tweet Interaction
- **View Engagement**: See likes, reposts, replies, and views for each tweet
- **Profile Images**: Click on profile images to see user details
- **Hashtags**: Click on hashtags to explore related content

## 🛠️ Customization

### Styling
- **Colors**: Modify color variables in `src/App.css`
- **Layout**: Adjust sidebar widths and spacing
- **Typography**: Change fonts and sizes
- **Responsive**: Customize breakpoints for different screen sizes

### Features
- **Add New Metrics**: Include additional engagement data
- **Custom Sorting**: Implement new sorting algorithms
- **Data Sources**: Connect to APIs instead of CSV files
- **Authentication**: Add user login and personalization

## 🔧 Technical Details

### Built With
- **React 18.2.0**: Modern React with hooks
- **PapaParse 5.4.1**: Robust CSV parsing library
- **CSS3**: Flexbox and Grid for responsive layouts
- **HTML5**: Semantic markup and accessibility

### Key Components
- **App.js**: Main application logic and state management
- **CSV Parser**: Handles data loading and processing
- **Sorting Engine**: Efficient sorting algorithms
- **UI Components**: Reusable tweet and navigation components

### Performance Features
- **Efficient Rendering**: Optimized React component updates
- **Memory Management**: Proper cleanup and state management
- **Responsive Design**: Mobile-first approach with CSS Grid/Flexbox
- **Error Boundaries**: Graceful error handling and recovery

## 📱 Responsive Design

The application is fully responsive and works on all device sizes:

- **Desktop (1200px+)**: Full 3-column layout with all features
- **Tablet (768px-1199px)**: Hidden right sidebar, maintained left navigation
- **Mobile (≤767px)**: Single column layout with collapsible navigation

## 🐛 Troubleshooting

### Common Issues

1. **CSV Not Loading**
   - Ensure `twitter-posts.csv` is in the `public/` folder
   - Check CSV format matches required columns
   - Verify file permissions

2. **Sorting Not Working**
   - Check browser console for JavaScript errors
   - Ensure CSV data has numeric values for likes/reposts
   - Verify React state is updating correctly

3. **Styling Issues**
   - Clear browser cache and refresh
   - Check CSS file is loading properly
   - Verify all CSS classes are applied correctly

4. **Performance Issues**
   - Reduce CSV file size if too large
   - Check for memory leaks in browser dev tools
   - Optimize CSV data structure

### Debug Mode
Enable debug logging by checking the browser console:
- CSV parsing information
- Data processing details
- Sorting algorithm execution
- State management updates

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build/` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **AWS S3**: Upload build files to S3 bucket

### Environment Variables
Create a `.env` file for production settings:
```env
REACT_APP_API_URL=your-api-endpoint
REACT_APP_CSV_URL=your-csv-url
REACT_APP_TITLE=Your App Title
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Twitter/X**: For the UI design inspiration
- **React Team**: For the amazing framework
- **PapaParse**: For robust CSV parsing
- **[Luminati](https://github.com/luminati-io/Twitter-X-dataset-samples)**: For providing the comprehensive Twitter dataset
- **Open Source Community**: For continuous improvements

## 📞 Support

If you have any questions or need help:

- **Create an Issue**: Report bugs or request features
- **Check Documentation**: Review this README and code comments
- **Community**: Join our community discussions

---

**Made with ❤️ for the Twitter/X community**

*This is a demo application and is not affiliated with Twitter/X Inc.*