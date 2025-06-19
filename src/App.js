import React, { useState } from 'react';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div className="App">
      <div className="slds-scope">
        {/* Header */}
        <div className="slds-page-header">
          <div className="slds-page-header__row">
            <div className="slds-page-header__col-title">
              <div className="slds-media">
                <div className="slds-media__figure">
                  <span className="slds-icon_container slds-icon-utility-lightning_usage">
                    <svg className="slds-icon slds-icon_large" aria-hidden="true">
                      <use xlinkHref="#utility-lightning_usage"></use>
                    </svg>
                  </span>
                </div>
                <div className="slds-media__body">
                  <div className="slds-page-header__name">
                    <div className="slds-page-header__name-title">
                      <h1>
                        <span className="slds-page-header__title slds-truncate">
                          SLDS React Prototype
                        </span>
                      </h1>
                    </div>
                  </div>
                  <p className="slds-page-header__name-meta">
                    Build beautiful interfaces with Lightning Design System
                  </p>
                </div>
              </div>
            </div>
            <div className="slds-page-header__col-actions">
              <div className="slds-page-header__controls">
                <button 
                  className="slds-button slds-button_brand"
                  onClick={() => setShowModal(true)}
                >
                  New Record
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="slds-container_large slds-p-around_large">
          {/* Cards Grid */}
          <div className="slds-grid slds-wrap slds-grid_pull-padded slds-m-top_large">
            
            {/* Quick Actions Card */}
            <div className="slds-col slds-size_1-of-1 slds-medium-size_1-of-2 slds-p-horizontal_small">
              <article className="slds-card">
                <div className="slds-card__header slds-grid">
                  <header className="slds-media slds-media_center slds-has-flexi-truncate">
                    <div className="slds-media__figure">
                      <span className="slds-icon_container slds-icon-utility-quick_text">
                        <svg className="slds-icon slds-icon_small" aria-hidden="true">
                          <use xlinkHref="#utility-quick_text"></use>
                        </svg>
                      </span>
                    </div>
                    <div className="slds-media__body">
                      <h2 className="slds-card__header-title">
                        <span>Quick Actions</span>
                      </h2>
                    </div>
                  </header>
                </div>
                <div className="slds-card__body slds-card__body_inner">
                  <div className="slds-button-group" role="group">
                    <button 
                      className="slds-button slds-button_neutral"
                      onClick={() => showToast('Create action triggered')}
                    >
                      Create
                    </button>
                    <button 
                      className="slds-button slds-button_neutral"
                      onClick={() => showToast('Edit action triggered')}
                    >
                      Edit
                    </button>
                    <button 
                      className="slds-button slds-button_destructive"
                      onClick={() => showToast('Delete action triggered')}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            </div>

            {/* Form Card */}
            <div className="slds-col slds-size_1-of-1 slds-medium-size_1-of-2 slds-p-horizontal_small">
              <article className="slds-card">
                <div className="slds-card__header slds-grid">
                  <header className="slds-media slds-media_center slds-has-flexi-truncate">
                    <div className="slds-media__figure">
                      <span className="slds-icon_container slds-icon-utility-form">
                        <svg className="slds-icon slds-icon_small" aria-hidden="true">
                          <use xlinkHref="#utility-form"></use>
                        </svg>
                      </span>
                    </div>
                    <div className="slds-media__body">
                      <h2 className="slds-card__header-title">
                        <span>Form Components</span>
                      </h2>
                    </div>
                  </header>
                </div>
                <div className="slds-card__body slds-card__body_inner">
                  <div className="slds-form-element slds-m-bottom_small">
                    <label className="slds-form-element__label" htmlFor="sample-input">
                      Sample Input
                    </label>
                    <div className="slds-form-element__control">
                      <input type="text" id="sample-input" className="slds-input" placeholder="Enter text here..." />
                    </div>
                  </div>
                  <div className="slds-form-element slds-m-bottom_small">
                    <label className="slds-form-element__label" htmlFor="sample-select">
                      Sample Select
                    </label>
                    <div className="slds-form-element__control">
                      <div className="slds-select_container">
                        <select className="slds-select" id="sample-select">
                          <option>Select an option</option>
                          <option>Admin</option>
                          <option>User</option>
                          <option>Manager</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="slds-form-element">
                    <div className="slds-form-element__control">
                      <div className="slds-checkbox">
                        <input type="checkbox" name="notifications" id="sample-checkbox" />
                        <label className="slds-checkbox__label" htmlFor="sample-checkbox">
                          <span className="slds-checkbox_faux"></span>
                          <span className="slds-form-element__label">Enable notifications</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Sample Table */}
          <div className="slds-m-top_large">
            <article className="slds-card">
              <div className="slds-card__header slds-grid">
                <header className="slds-media slds-media_center slds-has-flexi-truncate">
                  <div className="slds-media__figure">
                    <span className="slds-icon_container slds-icon-utility-table">
                      <svg className="slds-icon slds-icon_small" aria-hidden="true">
                        <use xlinkHref="#utility-table"></use>
                      </svg>
                    </span>
                  </div>
                  <div className="slds-media__body">
                    <h2 className="slds-card__header-title">
                      <span>Sample Data Table</span>
                    </h2>
                  </div>
                </header>
              </div>
              <div className="slds-card__body">
                <table className="slds-table slds-table_cell-buffer slds-table_bordered">
                  <thead>
                    <tr className="slds-line-height_reset">
                      <th className="" scope="col">
                        <div className="slds-truncate" title="Name">Name</div>
                      </th>
                      <th className="" scope="col">
                        <div className="slds-truncate" title="Email">Email</div>
                      </th>
                      <th className="" scope="col">
                        <div className="slds-truncate" title="Role">Role</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="slds-hint-parent">
                      <td data-label="Name">
                        <div className="slds-truncate" title="John Doe">John Doe</div>
                      </td>
                      <td data-label="Email">
                        <div className="slds-truncate" title="john@example.com">john@example.com</div>
                      </td>
                      <td data-label="Role">
                        <div className="slds-truncate" title="Admin">Admin</div>
                      </td>
                    </tr>
                    <tr className="slds-hint-parent">
                      <td data-label="Name">
                        <div className="slds-truncate" title="Jane Smith">Jane Smith</div>
                      </td>
                      <td data-label="Email">
                        <div className="slds-truncate" title="jane@example.com">jane@example.com</div>
                      </td>
                      <td data-label="Role">
                        <div className="slds-truncate" title="User">User</div>
                      </td>
                    </tr>
                    <tr className="slds-hint-parent">
                      <td data-label="Name">
                        <div className="slds-truncate" title="Bob Johnson">Bob Johnson</div>
                      </td>
                      <td data-label="Email">
                        <div className="slds-truncate" title="bob@example.com">bob@example.com</div>
                      </td>
                      <td data-label="Role">
                        <div className="slds-truncate" title="Manager">Manager</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>
        </div>

        {/* Toast Notification */}
        {toastMessage && (
          <div className="slds-notify-container slds-is-relative">
            <div className="slds-notify slds-notify_toast slds-theme_success" role="status">
              <span className="slds-assistive-text">success</span>
              <div className="slds-notify__content">
                <h2 className="slds-text-heading_small">{toastMessage}</h2>
              </div>
              <div className="slds-notify__close">
                <button 
                  className="slds-button slds-button_icon slds-button_icon-inverse" 
                  title="Close"
                  onClick={() => setToastMessage('')}
                >
                  <svg className="slds-button__icon slds-button__icon_large" aria-hidden="true">
                    <use xlinkHref="#utility-close"></use>
                  </svg>
                  <span className="slds-assistive-text">Close</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <section role="dialog" tabIndex="-1" className="slds-modal slds-fade-in-open">
            <div className="slds-modal__container">
              <header className="slds-modal__header">
                <button 
                  className="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse" 
                  title="Close"
                  onClick={() => setShowModal(false)}
                >
                  <svg className="slds-button__icon slds-button__icon_medium" aria-hidden="true">
                    <use xlinkHref="#utility-close"></use>
                  </svg>
                  <span className="slds-assistive-text">Close</span>
                </button>
                <h2 className="slds-modal__title slds-hyphenate">Create New Record</h2>
              </header>
              <div className="slds-modal__content slds-p-around_medium">
                <div className="slds-form-element slds-m-bottom_medium">
                  <label className="slds-form-element__label" htmlFor="modal-name">
                    Name <abbr className="slds-required" title="required">*</abbr>
                  </label>
                  <div className="slds-form-element__control">
                    <input type="text" id="modal-name" className="slds-input" required />
                  </div>
                </div>
                <div className="slds-form-element slds-m-bottom_medium">
                  <label className="slds-form-element__label" htmlFor="modal-email">
                    Email <abbr className="slds-required" title="required">*</abbr>
                  </label>
                  <div className="slds-form-element__control">
                    <input type="email" id="modal-email" className="slds-input" required />
                  </div>
                </div>
                <div className="slds-form-element">
                  <label className="slds-form-element__label" htmlFor="modal-description">
                    Description
                  </label>
                  <div className="slds-form-element__control">
                    <textarea id="modal-description" className="slds-textarea"></textarea>
                  </div>
                </div>
              </div>
              <footer className="slds-modal__footer">
                <button 
                  className="slds-button slds-button_neutral"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button 
                  className="slds-button slds-button_brand"
                  onClick={() => {
                    showToast('Record created successfully!');
                    setShowModal(false);
                  }}
                >
                  Save
                </button>
              </footer>
            </div>
          </section>
        )}
        {showModal && <div className="slds-backdrop slds-backdrop_open"></div>}

      </div>
    </div>
  );
}

export default App; 