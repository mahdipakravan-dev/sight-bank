export const BackCard = ({ color = "#187570" }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="250"
      height="150"
      viewBox="0 0 250 150"
      fill="none"
    >
      <rect
        y="150"
        width="150"
        height="250"
        rx="16"
        transform="rotate(-90 0 150)"
        fill={color}
      />
      <rect y="16" width="250" height="32" fill="#2A2A2A" />
    </svg>
  );
};
