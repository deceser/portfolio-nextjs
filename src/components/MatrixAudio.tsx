'use client';

import { useEffect, useRef } from 'react';

interface MatrixAudioProps {
  isActive: boolean;
}

export default function MatrixAudio({ isActive }: MatrixAudioProps) {
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);

  useEffect(() => {
    if (!isActive) {
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
        oscillatorRef.current = null;
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
      return;
    }

    const startAudio = async () => {
      try {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();

        const oscillator = audioContextRef.current.createOscillator();
        const gainNode = audioContextRef.current.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContextRef.current.destination);

        oscillator.frequency.setValueAtTime(220, audioContextRef.current.currentTime);
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.1, audioContextRef.current.currentTime);

        oscillator.start();
        oscillatorRef.current = oscillator;

        const modulateFrequency = () => {
          if (!audioContextRef.current || !oscillator) return;

          const time = audioContextRef.current.currentTime;
          oscillator.frequency.setValueAtTime(220 + Math.sin(time * 2) * 50, time);

          setTimeout(modulateFrequency, 100);
        };

        modulateFrequency();
      } catch (error) {
        console.log('Audio not supported');
      }
    };

    startAudio();

    return () => {
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
        oscillatorRef.current = null;
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    };
  }, [isActive]);

  return null;
}
