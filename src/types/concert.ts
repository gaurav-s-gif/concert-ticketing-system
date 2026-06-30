export interface Concert {
  id: number;
  title: string;
  artistName: string;
  description: string;
  dateTime: string;
  basePrice: number;

  venueId: number;
  venueName: string;
}