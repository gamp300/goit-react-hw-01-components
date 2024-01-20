import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <div>
      {title && <h2>{title}</h2>}

      <ul className="stat-list">
        {stats.map(stat => (
          <li key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
