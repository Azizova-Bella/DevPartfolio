'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type CardItemProps = {
  children: React.ReactNode;
  translateZ?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  className?: string;
};

const CardItem = ({
  children,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  className,
}: CardItemProps) => {
  return (
    <motion.div
      style={{
        transform: `translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
      }}
      className={clsx('transition-transform duration-300', className)}
    >
      {children}
    </motion.div>
  );
};

type CardBodyProps = {
  children: React.ReactNode;
  className?: string;
};

const CardBody = ({ children, className }: CardBodyProps) => {
  return (
    <div
      className={clsx(
        'bg-zinc-800 p-6 rounded-2xl shadow-lg border border-zinc-700',
        className
      )}
    >
      {children}
    </div>
  );
};

type CardContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const CardContainer = ({ children, className }: CardContainerProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={clsx('perspective-1000', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? 5 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="transform-style-preserve-3d"
      >
        {children}
      </motion.div>
    </div>
  );
};

export { CardContainer, CardBody, CardItem };
