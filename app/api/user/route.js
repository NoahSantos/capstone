import User from '@/server/models/user';
import {NextResponse} from 'next/server';

export async function POST(req){
    const {name, email} = await req.json();
    await User.create({name, email});
    return NextResponse.json({message: 'User Registered'}, {status: 201});
}
