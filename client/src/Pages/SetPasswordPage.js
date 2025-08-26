import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function SetPasswordPage() {
  // const { id } = useParams();
  const { id } = useParams(); // expects <Route path="/set-password/:id">

  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the user data or validate if the user exists
    async function checkUser() {
      const response = await fetch(`/check-user/${id}`);
      const data = await response.json();

      if (data.user && data.user.password) {
        // If the user already has a password, redirect to login
        navigate('/login');
      }
    }

    checkUser();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/set-password/${id}`, {
        method: 'POST',
        body: JSON.stringify({ password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        // Password set successfully, redirect to login
        navigate('/login');
      } else {
        setError(data.error || 'An error occurred while setting the password');
      }
    } catch (error) {
      setError('An error occurred while setting the password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Set Your Password</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Setting Password...' : 'Set Password'}
        </button>
      </form>
    </div>
  );
}

export default SetPasswordPage;
