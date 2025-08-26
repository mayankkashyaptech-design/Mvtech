import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navigate({ path }) {
    console.log(path)
  const navigate = useNavigate();

  useEffect(() => {
    navigate(path);
  }, [navigate, path]);

  return null; // Nothing is rendered, just redirects
}
