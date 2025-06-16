"use client"

import { ColumnDef } from "@tanstack/react-table"
type RecentStream = {
    id: number
    songName: string
    artist: string
    dateStreamed: string
    streamCount: number
    userId: string
    duration: number
    location: string
  };

export const columns: ColumnDef<RecentStream>[] = [
    {
        header: "Song",
        accessorKey: "songName",
        cell: ({ row }) => row.original.songName,
    },
    {
        header: "Artist",
        accessorKey: "artist",
    },
    {
        header: "Streams",
        accessorKey: "streamCount",
    },
    {
        header: "Duration",
        accessorKey: "duration",
        cell: ({ row }) => row.original.duration,
        enableSorting: true,
    },
    {
        header: "Location",
        accessorKey: "location",
        cell: ({ row }) => row.original.location,
        enableSorting: true,
    },
]