// HomePage.tsx
import React, { useEffect, useState } from 'react';
// import { DashboardContent } from '../components/dashboard_content';
import { AppWelcome } from '../components/app_welcome';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import { SeoIllustration } from '../assets/illustrations';
import { fetchUser } from '../hooks/api'; // Import the fetchUser function

const HomePage: React.FC = () => {
    const [user, setUser] = useState<{ displayName: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchUser();
        setUser(userData.user);
      } catch (err) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    //<DashboardContent maxWidth="xl">
      <Grid container spacing={3}>
        <Grid >//xs={12} md={8}
          <AppWelcome
            title={`Welcome back 👋 \n ${user?.displayName || 'Guest'}`}
            description="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
            img={<SeoIllustration hideBackground />}
            action={
              <Button variant="contained" color="primary">
                Go now
              </Button>
            }
          />
        </Grid>
      </Grid>
     //</DashboardContent> 
  );
};

export default HomePage;