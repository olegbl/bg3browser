import './styles.css';

import * as React from 'react';
import * as antd from 'antd';
import * as icons from '@ant-design/icons';
import { useState } from 'react';

import { useIsDebugModeEnabled } from './DebugContext';
import { useMeasurementsMode } from './MeasurementsContext';
import { useThemePreference } from './ThemeContext';

function SettingsButton() {
  const [debug, setDebug] = useIsDebugModeEnabled();
  const [themePreference, setThemePreference] = useThemePreference();
  const [measurementsMode, setMeasurementsMode] = useMeasurementsMode();

  const [isShown, setIsShown] = useState(false);

  const ITEMS = [
    {
      label: 'Units',
      content: (
        <antd.Radio.Group
          value={measurementsMode}
          onChange={(e) => setMeasurementsMode(e.target.value)}>
          <antd.Radio.Button value="metric">Metric</antd.Radio.Button>
          <antd.Radio.Button value="imperial">Imperial</antd.Radio.Button>
        </antd.Radio.Group>
      ),
    },
    {
      label: 'Theme',
      content: (
        <antd.Radio.Group
          value={themePreference}
          onChange={(e) => setThemePreference(e.target.value)}>
          <antd.Radio.Button value="system">System</antd.Radio.Button>
          <antd.Radio.Button value="light">Light</antd.Radio.Button>
          <antd.Radio.Button value="dark">Dark</antd.Radio.Button>
        </antd.Radio.Group>
      ),
    },
    {
      label: 'Debug',
      content: (
        <antd.Radio.Group
          value={debug}
          onChange={(e) => setDebug(e.target.value)}>
          <antd.Radio.Button value={true}>Show</antd.Radio.Button>
          <antd.Radio.Button value={false}>Hide</antd.Radio.Button>
        </antd.Radio.Group>
      ),
    },
  ];

  return (
    <>
      <antd.Button
        className="settings-button"
        icon={<icons.SettingOutlined />}
        size="large"
        onClick={() => setIsShown((value) => !value)}
      />
      <antd.Modal
        title="Settings"
        open={isShown}
        footer={null}
        onCancel={() => setIsShown(false)}>
        {ITEMS.map(({ label, content }) => (
          <antd.Row
            key={label}
            align="middle"
            justify="center"
            className="settings-row">
            <antd.Col span={8} className="settings-row-label">
              {label}
            </antd.Col>
            <antd.Col span={16}>{content}</antd.Col>
          </antd.Row>
        ))}
      </antd.Modal>
    </>
  );

  // [
  //   {
  //     key: 'imperial',
  //     label:
  //       'Measurements: ' +
  //       (measurementsMode === 'imperial' ? 'Imperial' : 'Metric'),
  //   },
  //   {
  //     key: 'theme',
  //     label:
  //       'Theme: ' +
  //       (themePreference === 'system'
  //         ? 'System'
  //         : themePreference === 'light'
  //         ? 'Light'
  //         : themePreference === 'dark'
  //         ? 'Dark'
  //         : 'Unknown'),
  //   },
  //   {
  //     key: 'debug',
  //     label: 'Debug Mode: ' + (debug ? 'Enabled' : 'Disabled'),
  //   },
  // ]

  // menu={{
  //   items: ,
  //   onClick: (event) => {
  //     if (event.key === 'imperial') {
  //       setMeasurementsMode((value) =>
  //         value === 'metric' ? 'imperial' : 'metric',
  //       );
  //     }
  //     if (event.key === 'theme') {
  //       setThemePreference((value) =>
  //         value === 'system'
  //           ? 'light'
  //           : value === 'light'
  //           ? 'dark'
  //           : value === 'dark'
  //           ? 'system'
  //           : 'system',
  //       );
  //     }
  //     if (event.key === 'debug') {
  //       setDebug((value) => !value);
  //     }
  //   },
  // }}
}

export default React.memo(SettingsButton);
