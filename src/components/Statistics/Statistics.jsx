// import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title = 'Upload stats', stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        <li className="item">
          <span className="label">.docx</span>
          <span className="percentage">4%</span>
        </li>
        <li className="item">
          <span className="label">.mp3</span>
          <span className="percentage">14%</span>
        </li>
        <li className="item">
          <span className="label">.pdf</span>
          <span className="percentage">41%</span>
        </li>
        <li className="item">
          <span className="label">.mp4</span>
          <span className="percentage">12%</span>
        </li>
      </ul>
    </section>
  );
};

// Statistics.propTypes = {
//   title: PropTypes.string.isRequired,
//   stats: PropTypes.arrayOf({
//     id: PropTypes.number.isRequired,
//     label: PropTypes.number.isRequired,
//     percentage: PropTypes.number.isRequired,
//   }),
// };
