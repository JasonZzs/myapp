import { AboutPage } from './about/about';
import { HomePage } from './home/home';
import { MinePage } from './mine/mine';
import { TabsPage } from './tabs/tabs';
import { TutorialPage } from './tutorial/tutorial';

// The page the user lands on after opening the app and without a session
export const FirstRunPage = TutorialPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = AboutPage;
export const Tab2Root = HomePage;
export const Tab3Root = MinePage;
