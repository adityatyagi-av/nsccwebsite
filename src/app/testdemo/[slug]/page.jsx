"use client"
import { usePathname} from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const page = () => {
  const pathname = usePathname()
  const parts = pathname.split('/'); 
  const libraryid = parts[parts.length - 1]; 
  const [idDetails, setIDDetails] = useState(null);

  console.log(libraryid);
  useEffect(() => {
    const fetchLibraryDetails = async () => {
      try {
        const { data, error } = await supabase
          .from('slot1')
          .select('*')
          .eq('id', libraryid)
          .single();

        if (error) {
          console.error('Error fetching library details:', error.message);
        } else {
          setIDDetails(data || null);
        }
      } catch (error) {
        console.error('Error fetching library details:', error.message);
      }
    };

    if (libraryid) {
      fetchLibraryDetails();
    }
  }, [libraryid]);
console.log(idDetails)
  return (
    <div>
      
    </div>
  )
}

export default page
