import {NextResponse, NextRequest} from 'next/server';

import {GEONAMES_BASE_URL, GEONAMES_USERNAME} from '@common/config/apiConfig';

export async function GET(req: NextRequest) {
  const {searchParams} = new URL(req.url);
  const path = req.nextUrl.pathname.split('/api/geonames/')[1];
  const query = searchParams.toString();

  if (!GEONAMES_USERNAME) {
    return NextResponse.json(
      {error: 'GeoNames username is not configured'},
      {status: 500}
    );
  }

  const url = `${GEONAMES_BASE_URL}/${path}?${query}&username=${GEONAMES_USERNAME}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return NextResponse.json(
        {error: 'Failed to fetch data from GeoNames'},
        {status: response.status}
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({error: 'Internal server error'}, {status: 500});
  }
}
